import { createPublicClient, http } from 'viem';
import { optimism } from 'viem/chains';

(async () => {
  const client = createPublicClient({
    chain: optimism,
    transport: http(),
  });

  const blockNumber = await client.getBlockNumber();

  console.log(`Block number: ${blockNumber}`);
})();
