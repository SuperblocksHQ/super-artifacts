import { IPersistedArtifactsModel, ITruffleBuild } from './models';

export class Artifacts {
    private readonly persistedModel: IPersistedArtifactsModel;

    constructor(persisted: IPersistedArtifactsModel) {
        if (!persisted) {
            throw new Error('Invalid parameters while creating artifacts');
        }
        this.persistedModel = persisted;
    }

    static createNew(deploymentId: string, artifacts: ITruffleBuild[]) {
        if (!deploymentId || !artifacts) {
            throw new Error('Invalid parameters while creating artifacts');
        }

        return new Artifacts({
           deploymentId,
           artifacts: reduceArtifactsObject(artifacts)
        });
    }

    get persisted(): IPersistedArtifactsModel { return this.persistedModel; }
}

function reduceArtifactsObject(artifacts: ITruffleBuild[]) {
    return artifacts.map((artifactsObj: ITruffleBuild) => {
        const { contractName, abi, metadata, bytecode, sourceMap } = artifactsObj;
        return { contractName, abi, metadata, bytecode, sourceMap };
    });
}
