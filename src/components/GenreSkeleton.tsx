import { Skeleton, SkeletonText, Box } from "@chakra-ui/react";

const GenreSkeleton = () => {
	const skeletons = Array.from({ length: 15 }, (_, index) => index + 1);

	return (
		<Box>
			{skeletons.map((s) => (
				<Box key={s} display={"flex"} alignItems={"center"} py={"5px"}>
					<Skeleton height="32px" width="32px" borderRadius={8} mr={3} />
					<SkeletonText noOfLines={1} width={"40%"} skeletonHeight="2" />
				</Box>
			))}
		</Box>
	);
};

export default GenreSkeleton;
