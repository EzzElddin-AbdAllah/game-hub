import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Game from "../entities/Game";
import getCroppedImageUrl from "../services/image-url";
import CriticScore from "./CriticScore";
import Emoji from "./Emoji";
import PlatformIconsList from "./PlatformIconsList";

interface Props {
	game: Game;
}

const GameCard = ({ game }: Props) => {
	return (
		<Card>
			<Image src={getCroppedImageUrl(game.background_image)} />
			<CardBody>
				<HStack justifyContent={"space-between"} mb={3}>
					<PlatformIconsList
						platforms={game.parent_platforms?.map((p) => p.platform) || []}
					/>
					<CriticScore score={game.metacritic} />
				</HStack>
				<Heading
					fontSize="2xl"
					_hover={{ color: "#797979", transition: "color 0.1s ease-in" }}
				>
					<Link to={`/games/${game.slug}`}>{game.name}</Link>
				</Heading>
				<Emoji rating={game.rating_top} />
			</CardBody>
		</Card>
	);
};

export default GameCard;
