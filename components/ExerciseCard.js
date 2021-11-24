import Image from 'next/image';
import Link from 'next/link';

const ExerciseCard = ({ image, title, description, benefits, id }) => {
  return (
    <div>
      <Link href={`/category/${id}`} passHref>
        <div>
          <Image src={image} height={300} width={300} alt="" />

          <div>
            <h3>{title}</h3>
            <h3>{description}</h3>
            <h3>{benefits}</h3>
          </div>
        </div>
      </Link>
    </div>
  );
};
export default ExerciseCard;
