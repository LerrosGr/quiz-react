import { RotatingLines } from 'react-loader-spinner';
import css from './MainLoader.module.css';

export default function MainLoader() {
  return (
    <div className={css.load}>
      <RotatingLines
        visible={true}
        height="96"
        width="96"
        strokeColor="#0F969C"
        strokeWidth="3"
        animationDuration="0.80"
        ariaLabel="rotating-lines-loading"
        wrapperStyle={{}}
      />
    </div>
  );
}
