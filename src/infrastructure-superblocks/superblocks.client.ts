import { ISuperBlocksClient } from '../app/interfaces';
import { Artifacts } from '../app-domain';
import { getApiBaseUrl } from './utils';
import fetch from 'node-fetch';

export const superblocksClient: ISuperBlocksClient = {
    async saveArtifacts(artifactsObject: Artifacts, token: string): Promise<void> {
        const { deploymentId, artifacts } = artifactsObject.persisted;
        const artifactsUrl = `${getApiBaseUrl()}/deployments/${deploymentId}/artifacts`;

        const response = await fetch(artifactsUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'project-token': token
            },
            body:  JSON.stringify({artifacts}) ,
        });

        if (response.ok) {
            console.log('[Superblocks Artifacts] Deployment Artifacts have been saved!');
        } else {
            const error = await response.text();
            throw new Error(`[Superblocks Artifacts] cannot save artifacts: ${error}`);
        }
    }
};
