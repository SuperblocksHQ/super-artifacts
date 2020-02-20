import { ITruffleBuild, ITruffleConfig } from '../../app-domain';

export interface ITruffle {
    getBuilds(config: ITruffleConfig): Promise<ITruffleBuild[]>;
}
