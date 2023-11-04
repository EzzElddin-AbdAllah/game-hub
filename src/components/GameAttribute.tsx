import { SimpleGrid, Text } from "@chakra-ui/react";
import Game from "../entities/Game";
import CriticScore from "./CriticScore";
import DefinitionItem from "./DefinitionItem";

interface Props {
	game: Game;
}

const GameAttribute = ({ game }: Props) => {
	return (
		<SimpleGrid columns={2} as="dl">
			<DefinitionItem
				heading="Platforms"
				children={game.parent_platforms?.map(({ platform }) => (
					<Text key={platform.id}>{platform.name}</Text>
				))}
			/>
			<DefinitionItem
				heading="Metascore"
				children={<CriticScore score={game.metacritic} />}
			/>
			<DefinitionItem
				heading="Genres"
				children={game.genres?.map((genre) => (
					<Text key={genre.id}>{genre.name}</Text>
				))}
			/>
			<DefinitionItem
				heading="Publishers"
				children={game.publishers?.map((publisher) => (
					<Text key={publisher.id}>{publisher.name}</Text>
				))}
			/>
		</SimpleGrid>
	);
};

export default GameAttribute;
