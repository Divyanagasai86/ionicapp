import {
    IonToolbar, IonCardTitle, IonInfiniteScroll, useIonViewWillEnter,
    IonInfiniteScrollContent, IonCard, IonGrid, IonRow, IonCol, IonSearchbar,  IonContent,  IonPage, IonCardContent, IonCardSubtitle, IonIcon
} from "@ionic/react";
import './Find.css';
import { menu } from 'ionicons/icons';
import { useState } from "react";


const Data = [
    {
        id: 1,
        title: "Apart",
        meaning: "separated by a specified distance in time or space"
    },

    {
        id: 2,
        title: "Acron",
        meaning: " the unsegmented preoral part of the body of a segmented animal (as an arthropod)"
    },

    {
        id: 3,
        title: "backfield",
        meaning: "the area of play behind the line of scrimmage."
    },

    {
        id: 4,
        title: "backfire",
        meaning: "have an opposite and undesirable effect to what was intended."
    },

    {
        id: 5,
        title: "cabel",
        meaning: "a small group of secret plotters, as against a government or person in authority."
    },

    {
        id: 6,
        title: "caber",
        meaning: "a pole or beam, especially one thrown as a trial of strength."
    },

    {
        id: 7,
        title: "dada",
        meaning: "the style and techniques of a group of artist writers etc of the early 20th century who exploited accidental and incongruous effects in their work and who programmatically challenged established canons of art, thought, morality, etc."
    },

    {
        id: 8,
        title: "dabchick",
        meaning: "any of various small grebes, especially the little grebe."
    },
    {
        id: 9,
        title: "dacarbazine",
        meaning: "a toxic, light-sensitive powder, C6H10N6O, used in the treatment of Hodgkin's disease and metastatic malignant melanoma."
    },
    {
        id: 10,
        title: " electrodynamics",
        meaning: "The study of moving electric charges and their interaction with magnetic and electric fields."
    },
    {
        id: 11,
        title: " exemplification",
        meaning: "The act of exemplifying."
    },
    {
        id: 12,
        title: " fissiparous",
        meaning: "Tending to break up into parts or break away from a main body; factious."
    },
    {
        id: 13,
        title: "futilitarianism",
        meaning: "a belief in the uselessness of human endeavor and aspiration."
    },
    {
        id: 14,
        title: "generalization",
        meaning: " A principle, statement, or idea having general application."
    },
    {
        id: 15,
        title: "geomorphologist",
        meaning: "The study of the evolution and configuration of landforms."
    },
    {
        id: 16,
        title: "hermaphroditism",
        meaning: "The presence of both male and female reproductive organs that is typical of certain plants and animals, as in a monoecious plant or an earthworm."
    },

    {
        id: 17,
        title: "hypercritically",
        meaning: "Excessively critical; captious."
    },
    {
        id: 18,
        title: "instrumentation",
        meaning: "The study and practice of arranging music for instruments."
    },

    {
        id: 19,
        title: "interscholastic",
        meaning: "Existing or conducted between or among schools."
    },

    {
        id: 20,
        title: "juxtapose",
        meaning: "To place side by side, especially for comparison or contrast."
    },
    {
        id: 21,
        title: " jactitation",
        meaning: "A false boasting or claim, especially one detrimental to the interests of another."
    },
    {
        id: 22,
        title: "kremlinologists",
        meaning: "The study of the policies of the Soviet or Russian government."
    },
    {
        id: 23,
        title: "knightlinesses",
        meaning: ". A medieval tenant giving military service as a mounted man-at-arms to a feudal landholder."
    },
    {
        id: 24,
        title: "lymphadenopathy",
        meaning: "An enlargement of the lymph nodes, usually associated with disease."
    },
    {
        id: 25,
        title: "lucrativeness",
        meaning: "the quality of affording gain or benefit or profit"
    },
    {
        id: 26,
        title: "multiprocessing",
        meaning: "A method of computing in which different parts of a task are distributed between two or more similar central processing units, allowing the computer to complete operations more quickly and to handle larger, more complex procedures."
    },
    {
        id: 27,
        title: "micropublishing",
        meaning: "Publishing involving very small print runs or individual volumes printed on demand."
    },
    {
        id: 28,
        title: "noncontributory",
        meaning: "Of or relating to a pension plan in which participating members or employees are not required to support the plan with their own contribution"
    },
    {
        id: 29,
        title: "nonprofessional",
        meaning: "One who is not a professional."
    },
    {
        id: 30,
        title: "orthopsychiatry",
        meaning: "The psychiatric study, treatment, and prevention of emotional and behavioral problems, especially of those that arise during early development."
    },
    {
        id: 31,
        title: "ophthalmologies",
        meaning: "The branch of medicine that deals with the diagnosis and treatment of diseases and disorders of the eye."
    },
    {
        id: 32,
        title: "preservationist",
        meaning: "One who advocates preservation, especially of natural areas, historical sites, or endangered species."
    },
    {
        id: 33,
        title: "preregistration",
        meaning: "An early registration, as for returning college students, that takes place before general registration."
    },
    {
        id: 34,
        title: "quadruplicities",
        meaning: " Consisting of four parts or members."
    },
    {
        id: 35,
        title: "quincentennial",
        meaning: "a 500th anniversary or the year or celebration marking it"
    },
    {
        id: 36,
        title: "radiotelegraphy",
        meaning: "Telegraphy in which messages are transmitted by radio instead of wire."
    },
    {
        id: 37,
        title: "righteousness",
        meaning: " Morally upright; without guilt or sin:"
    },
    {
        id: 38,
        title: " straightforward",
        meaning: ". Honest and frank:"
    },

    {
        id: 39,
        title: "sympathomimetic",
        meaning: "Producing physiological effects resembling those caused by the activity or stimulation of the sympathetic nervous system: a sympathomimetic hormone."
    },
    {
        id: 40,
        title: "lucrativeness",
        meaning: "the quality of affording gain or benefit or profit"
    },



]

const Find = () => {

    const [datas, setData] = useState([]);
    const [isInfiniteDisabled, setInfiniteDisabled] = useState(false);

    const pushData = () => {
        const max = datas.length + 10;
        const min = max - 10;
        const newData = [];
        if (datas.length === 40) {
            setInfiniteDisabled(true);
        } else {

            for (let i = min; i < max; i++) {
                newData.push(Data[i]);
            }
            setData([
                ...datas,
                ...newData
            ]);
        }
    }

    const loadData = (ev) => {
        setTimeout(() => {
            pushData();
            console.log('Loaded data');
            ev.target.complete();
            if (datas.length === 1000) {
                setInfiniteDisabled(true);
            }
        }, 3000);
    }
    useIonViewWillEnter(() => {
        pushData();
    });

    return (
        <IonPage>
            <IonToolbar className="toolbar-top " color="dark">
                <IonRow className="first-row ion-justify-content-between ion-padding">
                    <IonCol size="10" sizeSm="10" sizeMd="11.5">
                        <IonSearchbar className="ion-padding"></IonSearchbar>
                    </IonCol>
                    <IonCol size="2" sizeSm="2" sizeMd="0.5" className="menu-icon">
                        <IonIcon
                            icon={menu}
                            className="ion-jutify-content-center ion-padding"
                            style={{ float: "right", fontSize: "20px" }}
                            color="warning"
                        ></IonIcon>
                    </IonCol>
                </IonRow>
            </IonToolbar>
            <IonContent fullscreen className="content-page">
                <IonGrid className="find-grid">
                    {datas.map((data, id) => {
                        return (
                            <IonRow>
                                <IonCol size="12">
                                    <IonCard className="card-content">
                                        <IonCardContent>
                                            <IonCardTitle color="white ion-margin-bottom">{data.title}</IonCardTitle>
                                            <IonCardSubtitle color=" white">{data.meaning}</IonCardSubtitle>
                                        </IonCardContent>
                                    </IonCard>
                                </IonCol>
                            </IonRow>
                        )
                    })}

                    <IonInfiniteScroll onIonInfinite={loadData} threshold="100px" disabled={isInfiniteDisabled}>
                        <IonInfiniteScrollContent loadingSpinner="bubbles" loadingText="Loading more data...">

                        </IonInfiniteScrollContent>
                    </IonInfiniteScroll>

                </IonGrid>
            </IonContent>
        </IonPage>
    )
}

export default Find;