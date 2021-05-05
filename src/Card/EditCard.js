import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { readCard, updateCard } from "../utils/api";
import { useParams } from "react-router-dom";

import CardFormat from "./CardFormat";

function EditCard() {

    const history = useHistory();

    const { deckId, cardId } = useParams();
    const [card, setCard] = useState();

    useEffect(loadCard, [cardId]);

    function loadCard() {
        readCard(cardId).then(setCard);
    }

    async function submitHandler(card) {
        await updateCard(card).then(() => {
            history.push(`/decks/${deckId}`)
        })
    }

    const renderForm = card ? (
        <CardFormat onSubmit={submitHandler} initialState={card}/>
    ) : (
        <p>Loading...</p>
    );
    

    return (
        <div>
            <h2>Edit Card</h2>
            {renderForm}
        </div>
    )
}

export default EditCard;