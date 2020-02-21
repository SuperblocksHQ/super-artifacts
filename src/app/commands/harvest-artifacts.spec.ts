import * as sinon from 'ts-sinon';
import chaiAsPromised from 'chai-as-promised';
import { HarvestArtifactsCommand } from '.';
import { ISuperBlocksClient, ITruffle } from '../interfaces';
import { ITruffleBuild, ITruffleConfig } from '../../app-domain/models/truffle';
import chai from 'chai';

chai.use(chaiAsPromised);
const expect = chai.expect;

describe('Harvest Artifacts Command:', () => {
    let mockSuperblocksClient: any;
    let mockTruffle: any;
    let mockTruffleBuilds: ITruffleBuild[];
    let mockTruffleConfig: ITruffleConfig;

    beforeEach(() => {
        mockSuperblocksClient = sinon.stubInterface<ISuperBlocksClient>({ saveArtifacts: 'Saving artifacts' });
        mockTruffleBuilds = <ITruffleBuild[]> [{
            contractName: 'contract',
        }];
        mockTruffle = sinon.stubInterface<ITruffle>({ getBuilds: mockTruffleBuilds});

        mockTruffleConfig = <ITruffleConfig> {
            deployment_id: '11111',
            token: '1111111',
        };
    });

    describe('Execute', () => {
        it('works if called with correct arguments', async () => {
            const harvestArtifactsCommand = new HarvestArtifactsCommand(mockTruffle, mockSuperblocksClient);
            await harvestArtifactsCommand.execute(mockTruffleConfig);

            sinon.default.assert.calledOnce(mockTruffle.getBuilds);
            sinon.default.assert.calledOnce(mockSuperblocksClient.saveArtifacts);
        });

        it('throws exception if token is not supplied', async () => {
            mockTruffleConfig = <ITruffleConfig> {
                deployment_id: '11111',
                token: undefined
            };

            const harvestArtifactsCommand = new HarvestArtifactsCommand(mockTruffle, mockSuperblocksClient);
            await expect(harvestArtifactsCommand.execute(mockTruffleConfig)).to.be.rejectedWith('Project Token is not set');

            sinon.default.assert.notCalled(mockTruffle.getBuilds);
            sinon.default.assert.notCalled(mockSuperblocksClient.saveArtifacts);
        });
    });
});
