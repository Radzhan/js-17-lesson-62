import React from 'react';

interface Props { 
    url: string
}

const University: React.FC<Props> = ({url}) => {
    return (
        <div>
            <h2>Далеко-далеко, за словесными</h2>

            <p>
                Далеко-далеко за словесными горами в стране
                гласных и согласных живут рыбные тексты. Парадигматическая океана
                толку рекламных не осталось живет наш послушавшись грамматики
            </p>
            <p>
                Далеко-далеко за словесными горами в стране
                гласных и согласных живут рыбные тексты. Парадигматическая океана
                толку рекламных не осталось живет наш послушавшись грамматики
            </p>

            <img src={url}/>
        </div>
    );
};

export default University;