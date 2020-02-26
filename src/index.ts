import { ITruffleConfig } from './app-domain';
import { HarvestArtifactsCommand } from './app/commands';
import { truffle } from './infrastructure-truffle';
import { superblocksClient } from './infrastructure-superblocks';

async function harvestArtifacts(config: ITruffleConfig, done: () => void) {
    const command = new HarvestArtifactsCommand(truffle, superblocksClient);
    await command.execute(config);
    console.log('[Superblocks Artifacts] Deployment Artifacts have been saved!');
    done();
}

export = harvestArtifacts;
