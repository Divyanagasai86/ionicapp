import {
    IonToolbar, IonCardTitle, IonInfiniteScroll, useIonViewWillEnter,
    IonInfiniteScrollContent, IonCard, IonGrid, IonRow, IonCol, IonSearchbar, IonContent, IonPage, IonCardContent, IonCardSubtitle, IonIcon, IonAvatar, IonImg, useIonRouter, IonButton, IonHeader, IonTitle
} from "@ionic/react";
import './Find.css';
import { useState, useRef } from 'react';
import { NoSearch } from '../components/NoSearch';
import { NoResultsWordCard, WordCard } from '../components/WordCard';
import { searchWord } from '../utils';
import { WordStore } from '../store';



const Find = () => {
    const pageRef = useRef();
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResult, setSearchResult] = useState(false);

    const performSearch = async () => {
        const result = searchTerm !== "" ? await searchWord(searchTerm) : undefined;

        setTimeout(() => setSearchResult(result === undefined ? "none" : result), 250);

        WordStore.update(s => { s.searchCount++ });

    }


    return (
        <IonPage>
            <IonHeader>
                <IonToolbar className="toolbar-top " color="dark">
                    <IonRow>
                        <IonTitle>Search</IonTitle>
                        <IonAvatar>
                            <IonImg
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjgzOoeWAe9w4YTYMye3LNwVWU2QVptuu07w&usqp=CAU"
                                className="profile-pic"
                            />
                        </IonAvatar>
                    </IonRow>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen className="content-page">
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Search</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonGrid className="find-grid">
                    <IonRow className="ion-align-items-center">
                        <IonCol size="9">
                            <IonSearchbar animated value={searchTerm} onIonChange={e => setSearchTerm(e.target.value)} />
                        </IonCol>
                        <IonCol size="2">
                            <IonButton className="chats-vertical-dots" onClick={performSearch}>Search</IonButton>
                        </IonCol>
                    </IonRow>
                    {(searchResult && searchResult !== "none") &&

                        <WordCard word={searchResult} pageRef={pageRef} />
                    }

                    {(searchResult && searchResult === "none") &&

                        <NoResultsWordCard  word={searchResult}  />
                    }

                    {!searchResult && <NoSearch />}

                </IonGrid>
            </IonContent>
        </IonPage>
    )
}

export default Find;