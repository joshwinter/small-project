import { useMemo } from 'react';
import { Alert } from 'react-native';
import axios, { AxiosResponse } from 'axios';
import useSWR from 'swr';
import { MultiplePokemonResponse, SinglePokemonResponse, CharacterAugmentedData } from '@models';

const fetcher = (url: string) =>
  axios
    .get(url)
    .then((response: AxiosResponse<any>) => response.data)
    .catch((err: any) => {
      err && errorAlert(err);
    });

const errorAlert = (error: Error) => {
  Alert.alert('There was an error retrieving the data.', error.message, [{ text: 'OK', onPress: () => null }]);
};

export function useGetPokemon(limit: number) {
  const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}`;

  const { data, isValidating } = useSWR<MultiplePokemonResponse>(url, fetcher, {
    shouldRetryOnError: false
  });

  const augmentedData = useMemo(() => {
    const dataRes = data?.results;
    if (dataRes) {
      const augmentedArr: CharacterAugmentedData[] = [];
      for (const element of dataRes) {
        const splitUrl = element.url.split('/');
        const itemId = Number(splitUrl[splitUrl.length - 2]);

        element.itemId = itemId;
        element.photo = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${itemId}.png`;
        element.name = `${element.name[0].toUpperCase()}${element.name.substring(1)}`;

        augmentedArr.push(element);
      }
      return { ...data, results: augmentedArr };
    }
  }, [data]);

  return { data: augmentedData, isLoading: isValidating };
}

export function useGetSinglePokemon(itemId: number) {
  const url = `https://pokeapi.co/api/v2/pokemon/${itemId}`;

  const { data, isValidating } = useSWR<SinglePokemonResponse>(url, fetcher, {
    shouldRetryOnError: false
  });

  return { data, isLoading: isValidating };
}
