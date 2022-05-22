import React from 'react';
import { useNavigate } from 'react-router-dom';
import ReactWordcloud from 'react-wordcloud';

const words = [
  {
    text: 'women',
    value: 209,
  },
  {
    text: 'web3',
    value: 84,
  },
  {
    text: 'solidity',
    value: 11,
  },
  {
    text: 'storj',
    value: 116,
  },
  {
    text: 'graph',
    value: 17,
  },
  {
    text: 'cool',
    value: 10,
  },
  {
    text: 'florida',
    value: 54,
  },
  {
    text: 'activate',
    value: 12,
  },
  {
    text: 'education',
    value: 77,
  },
  {
    text: 'defi',
    value: 45,
  },
  {
    text: 'solana',
    value: 19,
  },
  {
    text: 'binance',
    value: 13,
  },
  {
    text: 'daos',
    value: 232,
  },
  {
    text: 'discord',
    value: 22,
  },
  {
    text: 'telegram',
    value: 35,
  },
  {
    text: 'twitter',
    value: 24,
  },
  {
    text: 'wallet',
    value: 38,
  },
  {
    text: 'crypto',
    value: 70,
  },
  {
    text: 'wbw3',
    value: 26,
  },
  {
    text: 'blu3 dao',
    value: 14,
  },
  {
    text: 'zk',
    value: 29,
  },
  {
    text: 'erc',
    value: 41,
  },
  {
    text: 'eth',
    value: 49,
  },
  {
    text: 'matic',
    value: 20,
  },
  {
    text: 'sphere',
    value: 59,
  },
  {
    text: 'ally',
    value: 49,
  },
  {
    text: 'inclusive',
    value: 45,
  },
  {
    text: 'desktop',
    value: 11,
  },
  {
    text: 'screenshot',
    value: 22,
  },
  {
    text: 'undo',
    value: 12,
  },
  {
    text: 'laptop',
    value: 38,
  },
  {
    text: 'ledger',
    value: 54,
  },
  {
    text: 'vibes',
    value: 14,
  },
  {
    text: 'good',
    value: 41,
  },
  {
    text: 'browser',
    value: 24,
  },
  {
    text: 'extension',
    value: 16,
  },
  {
    text: 'oceans404',
    value: 29,
  },
  {
    text: 'fwb',
    value: 20,
  },
  {
    text: 'women',
    value: 9,
  },
  {
    text: 'web3',
    value: 40,
  },
  {
    text: 'solidity',
    value: 110,
  },
  {
    text: 'storj',
    value: 11,
  },
  {
    text: 'graph',
    value: 170,
  },
  {
    text: 'cool',
    value: 10,
  },
  {
    text: 'florida',
    value: 54,
  },
  {
    text: 'activate',
    value: 12,
  },
  {
    text: 'education',
    value: 77,
  },
  {
    text: 'defi',
    value: 45,
  },
  {
    text: 'solana',
    value: 19,
  },
  {
    text: 'binance',
    value: 13,
  },
  {
    text: 'daos',
    value: 32,
  },
  {
    text: 'discord',
    value: 22,
  },
  {
    text: 'telegram',
    value: 35,
  },
  {
    text: 'twitter',
    value: 24,
  },
  {
    text: 'wallet',
    value: 38,
  },
  {
    text: 'crypto',
    value: 70,
  },
  {
    text: 'wbw3',
    value: 26,
  },
  {
    text: 'blu3 dao',
    value: 14,
  },
  {
    text: 'zk',
    value: 29,
  },
  {
    text: 'erc',
    value: 41,
  },
  {
    text: 'eth',
    value: 49,
  },
  {
    text: 'matic',
    value: 20,
  },
  {
    text: 'sphere',
    value: 59,
  },
  {
    text: 'ally',
    value: 49,
  },
  {
    text: 'inclusive',
    value: 45,
  },
  {
    text: 'desktop',
    value: 11,
  },
  {
    text: 'screenshot',
    value: 22,
  },
  {
    text: 'undo',
    value: 12,
  },
  {
    text: 'laptop',
    value: 38,
  },
  {
    text: 'ledger',
    value: 54,
  },
  {
    text: 'vibes',
    value: 14,
  },
  {
    text: 'good',
    value: 41,
  },
  {
    text: 'browser',
    value: 44,
  },
  {
    text: 'extension',
    value: 46,
  },
  {
    text: 'oceans404',
    value: 89,
  },
  {
    text: 'fwb',
    value: 120,
  },

  // UPDATE ME
  {
    text: 'women',
    value: 9,
  },
  {
    text: 'web3',
    value: 40,
  },
  {
    text: 'solidity',
    value: 110,
  },
  {
    text: 'storj',
    value: 11,
  },
  {
    text: 'graph',
    value: 170,
  },
  {
    text: 'cool',
    value: 10,
  },
  {
    text: 'florida',
    value: 54,
  },
  {
    text: 'activate',
    value: 12,
  },
  {
    text: 'education',
    value: 77,
  },
  {
    text: 'defi',
    value: 45,
  },
  {
    text: 'solana',
    value: 19,
  },
  {
    text: 'binance',
    value: 13,
  },
  {
    text: 'daos',
    value: 32,
  },
  {
    text: 'discord',
    value: 22,
  },
  {
    text: 'telegram',
    value: 35,
  },
  {
    text: 'twitter',
    value: 24,
  },
  {
    text: 'wallet',
    value: 38,
  },
  {
    text: 'crypto',
    value: 70,
  },
  {
    text: 'wbw3',
    value: 26,
  },
  {
    text: 'blu3 dao',
    value: 14,
  },
  {
    text: 'zk',
    value: 29,
  },
  {
    text: 'erc',
    value: 41,
  },
  {
    text: 'eth',
    value: 49,
  },
  {
    text: 'matic',
    value: 20,
  },
  {
    text: 'sphere',
    value: 59,
  },
  {
    text: 'ally',
    value: 49,
  },
  {
    text: 'inclusive',
    value: 45,
  },
  {
    text: 'desktop',
    value: 11,
  },
  {
    text: 'screenshot',
    value: 22,
  },
  {
    text: 'undo',
    value: 12,
  },
  {
    text: 'laptop',
    value: 38,
  },
  {
    text: 'ledger',
    value: 54,
  },
  {
    text: 'vibes',
    value: 14,
  },
  {
    text: 'good',
    value: 41,
  },
  {
    text: 'browser',
    value: 44,
  },
  {
    text: 'extension',
    value: 46,
  },
  {
    text: 'oceans404',
    value: 89,
  },
  {
    text: 'fwb',
    value: 120,
  },
  {
    text: 'women',
    value: 9,
  },
  {
    text: 'web3',
    value: 40,
  },
  {
    text: 'solidity',
    value: 110,
  },
  {
    text: 'storj',
    value: 11,
  },
  {
    text: 'graph',
    value: 170,
  },
  {
    text: 'cool',
    value: 10,
  },
  {
    text: 'florida',
    value: 54,
  },
  {
    text: 'activate',
    value: 12,
  },
  {
    text: 'education',
    value: 77,
  },
  {
    text: 'defi',
    value: 45,
  },
  {
    text: 'solana',
    value: 19,
  },
  {
    text: 'binance',
    value: 13,
  },
  {
    text: 'daos',
    value: 32,
  },
  {
    text: 'discord',
    value: 22,
  },
  {
    text: 'telegram',
    value: 35,
  },
  {
    text: 'twitter',
    value: 24,
  },
  {
    text: 'wallet',
    value: 38,
  },
  {
    text: 'crypto',
    value: 70,
  },
  {
    text: 'wbw3',
    value: 26,
  },
  {
    text: 'blu3 dao',
    value: 14,
  },
  {
    text: 'zk',
    value: 29,
  },
  {
    text: 'erc',
    value: 41,
  },
  {
    text: 'eth',
    value: 49,
  },
  {
    text: 'matic',
    value: 20,
  },
  {
    text: 'sphere',
    value: 59,
  },
  {
    text: 'ally',
    value: 49,
  },
  {
    text: 'inclusive',
    value: 45,
  },
  {
    text: 'desktop',
    value: 11,
  },
  {
    text: 'screenshot',
    value: 22,
  },
  {
    text: 'undo',
    value: 12,
  },
  {
    text: 'laptop',
    value: 38,
  },
  {
    text: 'ledger',
    value: 54,
  },
  {
    text: 'vibes',
    value: 14,
  },
  {
    text: 'good',
    value: 41,
  },
  {
    text: 'browser',
    value: 44,
  },
  {
    text: 'extension',
    value: 46,
  },
  {
    text: 'oceans404',
    value: 89,
  },
  {
    text: 'fwb',
    value: 120,
  },
];

function MyWordcloud() {
  const navigate = useNavigate();

  const callbacks = {
    //   getWordColor: (word) => (word.value > 50 ? 'blue' : 'red'),
    onWordClick: (word) => navigate(`/search/${word.text}`),
    //   onWordMouseOver: console.log,
    //   getWordTooltip: (word) =>
    //     `${word.text} (${word.value}) [${word.value > 50 ? 'good' : 'bad'}]`,
  };
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <ReactWordcloud
        options={{ fontFamily: 'Helvetica' }}
        words={words}
        minSize={[800, 500]}
        callbacks={callbacks}
      />
    </div>
  );
}

export default MyWordcloud;
