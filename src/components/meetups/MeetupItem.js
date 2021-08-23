import { useContext } from "react";

import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";
import FavoritesContext from "../../store/favorite-context";

function MeetupItem(props) {
    const favoriteCtx = useContext(FavoritesContext);

    const itemIsFavorite = favoriteCtx.itemIsFavorite(props.id);

    function toogleFavoriteStatusHandler() {
        if (itemIsFavorite) {
            favoriteCtx.removeFavorite(props.id);
        } else {
            favoriteCtx.addFavorite({
                id: props.id,
                image: props.image,
                title: props.title,
                address: props.address,
                description: props.description,
            });
        }
    }

    return (
        <li className={classes.item}>
            <Card>
                <div className={classes.image}>
                    <img src={props.image} alt={props.title} />
                </div>
                <div className={classes.content}>
                    <h3>{props.title}</h3>
                    <address>{props.address}</address>
                    <p>{props.description}</p>
                </div>
                <div className={classes.actions}>
                    <button onClick={toogleFavoriteStatusHandler}>
                        {itemIsFavorite
                            ? "Remover dos favoritos"
                            : "Adicionar aos favoritos"}
                    </button>
                </div>
            </Card>
        </li>
    );
}

export default MeetupItem;
