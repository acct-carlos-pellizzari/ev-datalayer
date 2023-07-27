import { useKit } from '../context/KitData';

export default function Log() {
  const {
    moduleData: [modules],
    inverterData: [inverters]
  } = useKit();
  
  return (
    <pre className='code'>
      CURRENT KIT STATE:
      {'\n\n'}
      -----------------------------------
      {'\n\n'}
      {JSON.stringify(modules, null, '  ')}
      {'\n\n'}
      -----------------------------------
      {'\n\n'}
      {JSON.stringify(inverters, null, '  ')}
    </pre>
  );
}
