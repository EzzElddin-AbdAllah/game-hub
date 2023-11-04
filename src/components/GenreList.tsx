import {
	Button,
	HStack,
	Heading,
	Image,
	List,
	ListItem,
} from "@chakra-ui/react";
import { useState } from "react";
import uesGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import useGameQueryStore from "../store";
import GenreSkeleton from "./GenreSkeleton";

const GenreList = () => {
	const { data, error, isLoading } = uesGenres();
	const [showSkeleton, setShowSkeleton] = useState(true);
	const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
	const setSelectedGenreId = useGameQueryStore((s) => s.setGenreId);

	setTimeout(() => {
		setShowSkeleton(false);
	}, 500);

	if (error) return null;

	return (
		<>
			<Heading fontSize="2xl" mb={3}>
				Genres
			</Heading>
			{(isLoading || showSkeleton) && <GenreSkeleton />}
			<List>
				{selectedGenreId && (
					<Button
						mb={3}
						width="80%"
						textAlign={"center"}
						fontSize="lg"
						variant="outline"
						onClick={() => setSelectedGenreId(undefined)}
					>
						All
					</Button>
				)}
				{data?.results.map((genre) => (
					<ListItem key={genre.id} py="5px">
						<HStack>
							<Image
								boxSize="32px"
								objectFit="cover"
								borderRadius={8}
								src={getCroppedImageUrl(genre.image_background)}
							/>{" "}
							<Button
								whiteSpace="normal"
								textAlign="left"
								fontWeight={selectedGenreId === genre.id ? "bold" : "normal"}
								fontSize="lg"
								variant="link"
								onClick={() => setSelectedGenreId(genre.id)}
							>
								{genre.name}
							</Button>
						</HStack>
					</ListItem>
				))}
			</List>
		</>
	);
};

export default GenreList;
