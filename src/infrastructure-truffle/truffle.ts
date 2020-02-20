import { ITruffle } from '../app/interfaces';
import { ITruffleBuild, ITruffleConfig } from '../app-domain';
import { readdirSync, readFileSync } from 'fs';

export const truffle: ITruffle = {
    async getBuilds(config: ITruffleConfig): Promise<ITruffleBuild[]> {
        const contractBuildsDir = config.contracts_build_directory;
        const builds: ITruffleBuild[] = [];

        const promises = getAllContractNamesFromDir(contractBuildsDir).map((name: string) => {
            return new Promise(async (resolve, reject) => {

                try {
                    const build: ITruffleBuild = JSON.parse(readFileSync(`${contractBuildsDir}/${name}`).toString());
                    builds.push(build);
                } catch (e) {
                    reject(e);
                }

                resolve();
            });
        });

        await Promise.all(promises).catch((e) => {
            console.log(e);
        });

        return builds;
    }
};

function getAllContractNamesFromDir(dir: string): string[] {
    return readdirSync(dir).filter((name: string) => name.endsWith('.json'));
}
