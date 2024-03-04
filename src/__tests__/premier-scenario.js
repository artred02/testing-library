// Basé sur le scénario 1 du fichier ../app.md

import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../app';

test('Scénario 1', async () => {
    // 1 - l'utilisateur est sur la Home
    render(<App />);

    // 2 - Un titre "Welcome home" est dans le document
    const title = screen.getByText(/Welcome home/i);
    expect(title).toBeInTheDocument();

    // 3 - Un lien "Fill out the form" est dans le document
    const link = screen.getByText(/Fill out the form/i);
    expect(link).toBeInTheDocument();

    // 4 - l'utilisateur clique sur le lien
    userEvent.click(link);

    // 5 - l'utilisateur est redirigé sur la page 1

    // 6 - Un titre "Page 1" est dans le document
    const titlePage1 = screen.getByText(/Page 1/i);
    expect(titlePage1).toBeInTheDocument();

    // 7 - un lien "Go home" est dans le document
    const linkGoHome = screen.getByRole('link', {name: /Go home/i});
    expect(linkGoHome).toBeInTheDocument();

    // 8 - Un champ avec le label "Favorite food" est dans le document
    const labelFavoriteFood = screen.getByLabelText(/Favorite food/i);
    expect(labelFavoriteFood).toBeInTheDocument();

    // 9 - l'utilisateur rempli le champ avec "Les pâtes"
    userEvent.type(labelFavoriteFood, "Les pâtes");

    // 10 - un lien "Next" est dans le document
    const linkNext = screen.getByText(/Next/i);
    expect(linkNext).toBeInTheDocument();

    // 11 - l'utilisateur clique sur le lien "Next"
    userEvent.click(linkNext);

    // 12- l'utilisateur est redirigé sur la page 2

    // 13 - Un titre "Page 2" est dans le document
    const titlePage2 = screen.getByText(/Page 2/i);
    expect(titlePage2).toBeInTheDocument();
    
    // 14 - un lien "Go back" est dans le document
    const linkGoBack = screen.getByText(/Go back/i);
    expect(linkGoBack).toBeInTheDocument();

    // 15 - Un champ avec le label "Favorite drink" est dans le document
    const labelFavoriteDrink = screen.getByLabelText(/Favorite drink/i);
    expect(labelFavoriteDrink).toBeInTheDocument();

    // 16 - l'utilisateur rempli le champ avec "Bière"
    userEvent.type(labelFavoriteDrink, "Bière");

    // 17 - un lien "Review" est dans document
    const linkReview = screen.getByText(/Review/i);
    expect(linkReview).toBeInTheDocument();

    // 18 - l'utilisateur clique sur le lien "Review"
    userEvent.click(linkReview);

    // 19 - l'utilisateur est redirigé sur la page de confirmation

    // 20 - Un titre "Confirm" est dans le document
    const titleConfirm = screen.getByRole('heading', { name: /Confirm/i });
    expect(titleConfirm).toBeInTheDocument();

    // 21 - Un texte "Please confirm your choices" est dans le document
    const textConfirm = screen.getByText(/Please confirm your choices/i);
    expect(textConfirm).toBeInTheDocument();

    // 22 - Un texte label "favorite food" a pour contenu "Les pâtes"
    const labelFavoriteFoodConfirm = screen.getByLabelText(/Favorite food/i);
    expect(labelFavoriteFoodConfirm).toBeInTheDocument();

    const labelFavoriteFoodConfirmData = screen.getByText(/Les pâtes/i);
    expect(labelFavoriteFoodConfirmData).toBeInTheDocument();

    // 23 - Un texte label "favorite drink" a pour contenu "Bière"
    const labelFavoriteDrinkConfirm = screen.getByLabelText(/Favorite drink/i);
    expect(labelFavoriteDrinkConfirm).toBeInTheDocument();

    const labelFavoriteDrinkConfirmData = screen.getByText(/Bière/i);
    expect(labelFavoriteDrinkConfirmData).toBeInTheDocument();
    
    // 24 - un lien "Go back" est dans le document
    const linkGoBackConfirm = screen.getByText(/Go back/i);
    expect(linkGoBackConfirm).toBeInTheDocument();
    
    // 25 - un bouton "Confirm" est dans le document
    const buttonConfirm = screen.getByRole('button', { name: /Confirm/i });
    expect(buttonConfirm).toBeInTheDocument();
    
    // 26 - l'utilisateur clique sur le bouton "Confirm"
    userEvent.click(buttonConfirm);

    // 27 - l'utilisateur est redirigé sur la page de Félicitation

    // 28 - Un titre "Congrats.You did it." est dans le document
    await waitFor(() => {
        const titleCongrats = screen.getByRole('heading', { name: /Congrats. You did it./i });
        expect(titleCongrats).toBeInTheDocument();
    });
    // 29 - un lien "Go home" est dans le document
    const linkGoHomeCongrats = screen.getByRole('link', { name: /Go home/i });
    expect(linkGoHomeCongrats).toBeInTheDocument();
    
    // 30 - l'utilisateur clique sur le lien "Go Home"
    userEvent.click(linkGoHomeCongrats);
});