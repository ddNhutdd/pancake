import {RouterProvider} from 'react-router-dom';
import {Provider as ReduxProvider} from 'react-redux';
import {store} from './redux/config-store';
import {router} from './router';
import {GlobalStyle} from './components/global-style';
import {ThemeProvider} from './context/dark-theme';
import {I18nextProvider} from 'react-i18next';
import i18n from 'src/translate/i18n.js';
import AlertContainer from './context/alert-container';
import {create, all} from 'mathjs';

const config = {};
export const math = create(all, config);

function App() {
	return (
		<I18nextProvider i18n={i18n}>
			<ReduxProvider store={store}>
				<GlobalStyle>
					<ThemeProvider>
						<AlertContainer>
							<RouterProvider router={router} />
						</AlertContainer>
					</ThemeProvider>
				</GlobalStyle>
			</ReduxProvider>
		</I18nextProvider>
	);
}

export default App;
