import { Hourglass } from 'react-loader-spinner';
import css from './Loader.module.css';

export default function Loader() {
  return (
    <div className={css.container}>
      <p className={css.textLoader}>Loading results...</p>
      <Hourglass
        visible={true}
        height="80"
        width="80"
        ariaLabel="hourglass-loading"
        wrapperStyle={{}}
        colors={['#0C7076', '#0F969C']}
      />
    </div>
  );
}
