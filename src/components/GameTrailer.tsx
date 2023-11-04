import useTrailer from "../hooks/useTrailers";

interface Props {
	gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
	const { data, isLoading, error } = useTrailer(gameId);

	if (error) throw error;

	if (isLoading) return null;

	return (
		<video
			src={data?.results[0]?.data[480]}
			poster={data?.results[0]?.preview}
			controls
		/>
	);
};

export default GameTrailer;
