import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';

export const Home: FC = () => {
    const { t } = useTranslation();
    const [count, setCount] = useState(0);
    const Ana = "Ana";

    const name = (nameValue: string) => {
        return nameValue;
    };
    const diagnosis = (diagnosisValue: string) => {
        return diagnosisValue;
    };

    return <div>
        <h1 className="text-base-content text-4xl">{t(name(Ana))}</h1>
        <div className="card sm:max-w-sm">
            <div className="card-body">
                <div className="card sm:max-w-sm">

                </div>                <div className="card-actions">
                    <button className="btn btn-primary">Edit</button>
                </div>
            </div>
        </div>
        <button className="btn" onClick={() => setCount(count + 1)}>Count {count} </button>
    </div>;
};
