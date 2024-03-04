// Basé sur le scénario 2 du fichier ../app.md

import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../app';

test('Scénario 2', async () => {
    // 1 - l'utilisateur est sur la Home
    render(<App />);

    // 2 - Un titre "Welcome home" est dans le document
    const title = screen.getByRole('heading', {name: /Welcome home/i});
    expect(title).toBeInTheDocument();

    // 3 - Un lien "Fill out the form" est dans le document
    const link = screen.getByRole('link', {name: /Fill out the form/i});
    expect(link).toBeInTheDocument();

    // 4 - l'utilisateur clique sur le lien
    userEvent.click(link);

    // 5 - l'utilisateur est redirigé sur la page 1

    // 6 - Un titre "Page 1" est dans le document
    const titlePage1 = screen.getByRole('heading', {name: /Page 1/i});
    expect(titlePage1).toBeInTheDocument();

    // 7 - un lien "Go home" est dans le document
    const linkGoHome = screen.getByRole('link', {name: /Go home/i});
    expect(linkGoHome).toBeInTheDocument();

    // 8 - Un champ avec le label "Favorite food" est dans le document
    const labelFavoriteFood = screen.getByLabelText(/Favorite food/i);
    expect(labelFavoriteFood).toBeInTheDocument();

    // 9 - l'utilisateur rempli le champ avec ""
    userEvent.type(labelFavoriteFood, "");

    // 10 - un lien "Next" est dans le document
    const linkNext = screen.getByRole('link', {name: /Next/i});
    expect(linkNext).toBeInTheDocument();

    // 11 - l'utilisateur clique sur le lien "Next"
    userEvent.click(linkNext);

    // 12- l'utilisateur est redirigé sur la page 2

    // 13 - Un titre "Page 2" est dans le document
    const titlePage2 = screen.getByRole('heading', {name: /Page 2/i});
    expect(titlePage2).toBeInTheDocument();

    // 14 - un lien "Go back" est dans le document
    const linkGoBack = screen.getByRole('link', {name: /Go back/i});
    expect(linkGoBack).toBeInTheDocument();

    // 15 - Un champ avec le label "Favorite drink" est dans le document
    const labelFavoriteDrink = screen.getByLabelText(/Favorite drink/i);
    expect(labelFavoriteDrink).toBeInTheDocument();

    // 16 - l'utilisateur rempli le champ avec "Bière"
    userEvent.type(labelFavoriteDrink, "Bière");

    // 17 - un lien "Review" est dans document
    const linkReview = screen.getByRole('link', {name: /Review/i});
    expect(linkReview).toBeInTheDocument();

    // 18 - l'utilisateur clique sur le lien 'Review'
    userEvent.click(linkReview);

    // 19 - l'utilisateur est redirigé sur la page de confirmation

    // 20 - Un titre "Confirm" est dans le document
    const titleConfirm = screen.getByRole('heading', {name: /Confirm/i});
    expect(titleConfirm).toBeInTheDocument();

    // 21 - Un texte "Please confirm your choices" est dans le document
    const textConfirm = screen.getByText(/Please confirm your choices/i);
    expect(textConfirm).toBeInTheDocument();

    // 22 - Un texte label "favorite food" a pour contenu ""
    const labelFavoriteFoodConfirm = screen.getByLabelText(/Favorite food/i);
    expect(labelFavoriteFoodConfirm).toBeInTheDocument();

    // 23 - Un texte label "favorite drink" a pour contenu "Bière"
    const labelFavoriteDrinkConfirm = screen.getByLabelText(/Favorite drink/i);
    expect(labelFavoriteDrinkConfirm).toBeInTheDocument();

    const labelFavoriteDrinkConfirmData = screen.getByText(/Bière/i);
    expect(labelFavoriteDrinkConfirmData).toBeInTheDocument();

    // 24 - un lien "Go back" est dans le document
    const linkGoBackConfirm = screen.getByRole('link', {name: /Go back/i});
    expect(linkGoBackConfirm).toBeInTheDocument();

    // 25 - un bouton "Confirm" est dans le document
    const buttonConfirm = screen.getByRole('button', {name: /Confirm/i});
    expect(buttonConfirm).toBeInTheDocument();

    // 26 - l'utilisateur clique sur le bouton "Confirm"
    userEvent.click(buttonConfirm);

    // 27 - l'utilisateur est redirigé sur la page d'erreur

    // 28 - Un texte "Oh no. There was an error." est dans le document
    await waitFor(() => {
        const textError = screen.getByText(/Oh no. There was an error./i);
        expect(textError).toBeInTheDocument();
    });

    // 30 - un lien "Go home" est dans le document
    await waitFor(() => {
        const linkGoHomeError = screen.getByRole('link', {name: /Go home/i});
        expect(linkGoHomeError).toBeInTheDocument();
    });

    // 31 - un lien "Try again" est dans le document
    await waitFor(() => {
        const linkTryAgain = screen.getByRole('link', {name: /Try again/i});
        expect(linkTryAgain).toBeInTheDocument();

        // 32 - l'utilisateur clique sur le lien "Try again"
        userEvent.click(linkTryAgain);
    });

    // 33 - l'utilisateur est redirigé sur la page 1

    // 34 - Un titre "Page 1" est dans le document
    await waitFor(() => {
        const titlePage1Again = screen.getByRole('heading', {name: /Page 1/i});
        expect(titlePage1Again).toBeInTheDocument();
    });
});