import { IonBadge } from "@ionic/react";
import './WordMeaning.css';

export const WordMeaning = ({ meaning, index }) => (
  <div className={ index > 0 ? "ion-padding-top" : "" }>
    <IonBadge key={ index } >{ meaning.partOfSpeech }</IonBadge>
    <br />
    { meaning.definitions.map((definition, index2) => {

      return (
        <p key={ `definition_${ index2 }` } className={ index2 > 0 ? "ion-padding-top" : "" }>
          { index2 + 1 }.&nbsp;
          { definition.definition }
        </p>
      );
    })}
  </div>
);