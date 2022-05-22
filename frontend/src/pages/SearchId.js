import { useParams } from 'react-router-dom';
const SearchIdPage = (props) => {
  const params = useParams();
  const links = [
    {
      fileName: 'bc.jpg',
      url: 'https://demo.storj-ipfs.com/ipfs/QmWR657iYw5rSarZtR1E5RDPNmPUt6nqTvQ5wtehUvi3wm',
    },
    {
      fileName: 'bcmethods.jpg',
      url: 'https://demo.storj-ipfs.com/ipfs/QmVa15rnChCySbYUpGDuFjWbxWa3cEeC3Cmvd7ZoTbCs2R',
    },
    {
      fileName: 'clinicgis.png',
      url: 'https://demo.storj-ipfs.com/ipfs/QmVCSeRNosF4oHgXphResBZeCVWxjAMULS1DLaHggEPJxM',
    },
    {
      fileName: 'pills.jpeg',
      url: 'https://demo.storj-ipfs.com/ipfs/QmdPP4qttD5Mi667XNo7cCKvCSiKCtvDbHQ2bJnBSq4Fdr',
    },
  ];
  return (
    <div>
      <h1 className='text-xl font-semibold '>
        Tag:{' '}
        <button className='mx-3 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow'>
          {params.id}
        </button>
      </h1>

      <div>
        <ul>
          {links.map((l) => (
            <a href={l.url} target='_blank' rel='noreferrer' key={l.fileName}>
              <li>{l.fileName}</li>
            </a>
          ))}
          <li></li>
        </ul>
      </div>
    </div>
  );
};

export default SearchIdPage;
