import { Image, SimpleGrid } from "@chakra-ui/react";
import useScreenshot from "../hooks/useScreenshots";

interface Props {
	gameId: number;
}

const GameScreenshots = ({ gameId }: Props) => {
	const { data, error, isLoading } = useScreenshot(gameId);

	if (error) throw error;

	if (isLoading) return null;

	return (
		<SimpleGrid columns={{ base: 1, md: 2 }} spacing={3}>
			{data?.results.map((img) => (
				<Image key={img.id} src={img.image} />
			))}
		</SimpleGrid>
	);
};

export default GameScreenshots;
