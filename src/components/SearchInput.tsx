import { CloseIcon, SearchIcon } from "@chakra-ui/icons";
import {
	Input,
	InputGroup,
	InputLeftElement,
	InputRightElement,
} from "@chakra-ui/react";
import Filter from "bad-words";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useGameQueryStore from "../store";

const SearchInput = () => {
	const setSearchGame = useGameQueryStore((s) => s.setSearchGame);
	const navigate = useNavigate();
	const [inputValue, setInputValue] = useState("");
	const filter = new Filter();

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value;

		if (filter.isProfane(value)) {
			setInputValue("");
			navigate("/");
			setSearchGame("");
		} else {
			setInputValue(value);
			if (value.length > 2) {
				setSearchGame(value);
				navigate("/");
			}
		}
	};

	const handleClearInput = () => {
		setSearchGame("");
		navigate("/");
		setInputValue("");
	};

	return (
		<form onSubmit={(event) => event.preventDefault()}>
			<InputGroup>
				<InputLeftElement children={<SearchIcon />} />
				<Input
					borderRadius={20}
					variant="filled"
					placeholder="Search games..."
					value={inputValue}
					onChange={handleInputChange}
				/>
				{inputValue.length > 2 && (
					<InputRightElement>
						<CloseIcon
							_hover={{ cursor: "pointer" }}
							onClick={handleClearInput}
						/>
					</InputRightElement>
				)}
			</InputGroup>
		</form>
	);
};

export default SearchInput;
