import React from "react";
import { useHistory } from "react-router-dom";
import { createCard } from "../utils/api";
import { useParams } from "react-router-dom";

import CardFormat from "./CardFormat";

function CreateCard() {

    const history = useHistory();

    const { deckId } = useParams();

    async function submitHandler(card) {
        await createCard(deckId, card)
        .then(() => {
            history.push(`/decks/${deckId}`)
        })
    }

    return (
        <div>      
            <CardFormat onSubmit={submitHandler} />
        </div>
    )
}

export default CreateCard;
