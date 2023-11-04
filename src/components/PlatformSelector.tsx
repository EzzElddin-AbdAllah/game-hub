import { ChevronDownIcon } from "@chakra-ui/icons";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import usePlatform from "../hooks/usePlatform";
import usePlatforms from "../hooks/usePlatforms";
import useGameQueryStore from "../store";

const PlatformSelector = () => {
	const { data, error } = usePlatforms();

	const selectedPlatformId = useGameQueryStore((s) => s.gameQuery.platformId);
	const setPlatformId = useGameQueryStore((s) => s.setPlatformId);

	const selectedPlatform = usePlatform(selectedPlatformId);

	if (error) return null;

	return (
		<>
			<Menu>
				<MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
					{selectedPlatform?.name || "Platforms"}
				</MenuButton>
				<MenuList>
					{data?.results.map((platform) => (
						<MenuItem
							key={platform.id}
							onClick={() => setPlatformId(platform.id)}
						>
							{platform.name}
						</MenuItem>
					))}
				</MenuList>
			</Menu>
			{selectedPlatformId && (
				<Button
					textAlign={"center"}
					fontSize="lg"
					variant="outline"
					onClick={() => setPlatformId(undefined)}
				>
					All
				</Button>
			)}
		</>
	);
};

export default PlatformSelector;
