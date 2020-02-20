import { Artifacts } from '../../app-domain';

export interface ISuperBlocksClient {
    saveArtifacts(artifacts: Artifacts, token: string): Promise<void>;
}
