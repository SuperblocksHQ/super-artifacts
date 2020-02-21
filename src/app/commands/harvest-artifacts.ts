import { ISuperBlocksClient, ITruffle } from '../interfaces';
import { ITruffleConfig, Artifacts } from '../../app-domain';

export class HarvestArtifactsCommand {
    private readonly truffle: ITruffle;
    private readonly superblocksClient: ISuperBlocksClient;

    constructor(truffle: ITruffle, superBlocksClient: ISuperBlocksClient) {
        this.truffle = truffle;
        this.superblocksClient = superBlocksClient;
    }

    async execute(config: ITruffleConfig) {
        const { deployment_id, token } = config;

        if (!deployment_id) {
            throw new Error('[Superblocks Artifacts] DeploymentId is not set');
        }

        if (!token) {
            throw new Error('[Superblocks Artifacts] Project Token is not set');
        }

        const builds = await this.truffle.getBuilds(config);
        const artifacts = Artifacts.createNew(deployment_id, builds);

        await this.superblocksClient.saveArtifacts(artifacts, token);
    }
}
