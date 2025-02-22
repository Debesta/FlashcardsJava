let flashcards = [
	{
		front: 'Jakie są trzy podstawowe zasady programowania obiektowego w Javie?',
		back: 'Hermetyzacja, polimorfizm, dziedziczenie.',
	},
	{
		front: 'Czym charakteryzuje się hermetyzacja w Javie?',
		back: 'Zapobieganiem przypadkowym interferencjom z zewnętrznym kodem oraz niepoprawnemu użyciu danych (tzw. czarna skrzynka).',
	},
	{
		front: 'Czym charakteryzuje się polimorfizm w Javie?',
		back: 'Możliwością posługiwania się pewnym zbiorem akcji za pomocą jednego interfejsu.',
	},
	{
		front: 'Czym charakteryzuje się proces dziedziczenia w Javie?',
		back: 'Umożliwieniem otrzymywania pewnych właściwości obiektu przez inny obiekt.',
	},
	{
		front: 'Czym jest maszyna wirtualna Javy (JVM)?',
		back: 'Środowiskiem zapewniającym przenośność Javy poprzez wykonywanie programów skompilowanych do postaci kodu bajtowego Javy.',
	},
	{
		front: 'Czym jest Java Runtime Environment (JRE)?',
		back: 'Środowiskiem uruchamiającym aplikacje napisane w Javie.',
	},
	{
		front: 'Czym jest Java Development Kit (JDK)?',
		back: 'Narzędziem dla programistów pozwalającym na tworzenie programów.',
	},
	{
		front: 'Czym jest Garbage Collector?',
		back: 'Narzędziem odpowiadającym za automatyczne zarządzanie pamięcią i jej zwalnianie w przypadku nieużywania zasobu.',
	},
	{
		front: 'Czym jest kompilator JIT (just-in-time)?',
		back: 'Częścią maszyny wirtualnej Javy umożliwiającą szybszą kompilację wybranych fragmentów kodu.',
	},
	{
		front: 'Dlaczego JAVA jest określana jako język przenośny?',
		back: 'Ponieważ programy Java mogą być wykonywane w dowolnych środowiskach, jeśli tylko istnieje w nich maszyna wirtualna Javy.',
	},
	{ front: 'Jakie rozszerzenie posiadają pliki źródłowe programów napisanych w języku Java?', back: '.java' },
	{
		front: 'Po skompilowaniu pliku źródłowego kod bajtowy zostaje umieszczony w pliku o jakim rozszerzeniu?',
		back: '.class',
	},
	{ front: 'Od wywołania jakiej metody zaczyna się działanie wszystkich programów w języku Java?', back: 'main()' },
	{ front: 'W języku Java wyróżniamy dwa podstawowe typy danych, jakie?', back: 'Podstawowe i prymitywne.' },
	{ front: 'Jaki typ całkowity w języku Java składa się z 32 bitów reprezentacji?', back: 'int' },
	{ front: 'Jaki typ całkowity w języku Java składa się z 64 bitów reprezentacji?', back: 'long' },
	{ front: 'Jaki typ zmiennoprzecinkowy w języku Java składa się z 32 bitów reprezentacji?', back: 'float' },
	{ front: 'Jaki typ zmiennoprzecinkowy w języku Java składa się z 64 bitów reprezentacji?', back: 'double' },
	{ front: 'Jakie działanie ma sekwencja znaków: "\n" ?', back: 'Nowy wiersz.' },
	{ front: 'Jakie działanie ma operator arytmetyczny: % ?', back: 'Modulo.' },
	{ front: 'Jakie znaczenie ma operator logiczny: & ?', back: 'AND (iloczyn logiczny).' },
	{
		front: 'Przypisanie wartości jednego typu prostego do drugiego odbywa się automatycznie kiedy:',
		back: 'Typy są zgodne i zakres typu docelowego jest większy.',
	},
	{ front: 'W jakim kodzie są zapisywane znaki (char) w Javie?', back: 'Unicode' },
	{
		front: 'Kiedy stosujemy rzutowanie?',
		back: 'Podczas konwersji typów, które nie są zgodne lub gdy zachodzi konwersja zawężająca.',
	},
	{
		front: 'Jakiego typu może być wyrażenie sterujące instrukcją switch?',
		back: 'byte, short, int, char, enum, String.',
	},
	{ front: 'Przykładem jakiej pętli jest ten kod: for(;;){ i++};', back: 'Pętli nieskończonej.' },
	{ front: 'Jakie jest zastosowanie instrukcji continue w pętlach?', back: 'Wymuszenie wcześniejszej iteracji pętli.' },
	{
		front: 'Jak działa instrukcja break z etykietą?',
		back: 'Powoduje przekazanie sterowania na koniec bloku oznaczonego etykietą.',
	},
	{ front: 'Czym jest referencja obiektu?', back: 'Adresem obiektu utworzonego w pamięci.' },
	{ front: 'Co oznacza określenie void przy deklaracji metody?', back: 'Metoda nic nie zwraca.' },
	{
		front: 'Co oznacza określenie static przy deklaracji metody?',
		back: 'Metodę można wywołać bez utworzenia obiektu jej klasy.',
	},
	{
		front: 'Co oznacza określenie final przy deklaracji metody?',
		back: 'Metoda nie może być zmieniona w klasie pochodnej.',
	},
	{ front: 'Jakie jest zadanie konstruktora?', back: 'Inicjalizacja obiektu podczas jego tworzenia.' },
	{ front: 'W jaki sposób metoda musi kończyć swoje działanie, jeśli zwraca wartość?', back: 'Instrukcją return.' },
	{ front: 'Jeśli nie utworzymy konstruktora danej klasy to…?', back: 'I tak będziemy mogli skorzystać z domyślnego.' },
	{ front: 'Od jakiej wartości rozpoczynają się indeksy tablic w Javie?', back: 'Od 0 (zera).' },
	{ front: 'Czy można zmienić rozmiar tablicy w Javie?', back: 'Nie, tablice w Javie są niezmienne.' },
	{ front: 'Jaki jest domyślny modyfikator dostępu w Javie?', back: 'Tzw. pakietowy.' },
	{
		front: 'Na czym polega przeciążanie metod?',
		back: 'Na deklaracji metod o tej samej nazwie w jednej klasie ale z różnymi parametrami.',
	},
	{ front: 'Na czym polega przesłanianie metod?', back: 'Na własnej implementacji metody z klasy bazowej.' },
	{
		front: 'Czym się różni operator == od metody equals()?',
		back: 'Metoda equals() porównuje wartość, a operator == referencje.',
	},
	{
		front: 'Do czego służy adnotacja @Override?',
		back: 'Jest informacją dla kompilatora, że metoda przesłania inną metodę.',
	},
	{
		front: 'Począwszy od JDK5 możemy implementować metody ze zmienną liczbą argumentów, w jaki sposób to robimy?',
		back: 'Listę argumentów o zmiennej długości oznaczamy za pomocą trzech kropek (…).',
	},
	{ front: 'Jakiego słowa kluczowego musimy użyć żebyśmy mogli dziedziczyć po klasie bazowej?', back: 'Extends.' },
	{ front: 'Po ilu klasach może dziedziczyć klasa pochodna w Javie?', back: 'Po jednej.' },
	{
		front: 'Do czego służy słowo kluczowe super w Javie?',
		back: 'Pozwala odwoływać się do metod i konstruktorów klasy bazowej.',
	},
	{
		front: 'Czym charakteryzuje się metoda abstrakcyjna?',
		back: 'Jest oznaczona modyfikatorem abstract, nie posiada ciała, klasa pochodna musi ją przesłonić, może ale nie musi mieć listy parametrów.',
	},
	{
		front: 'Czym charakteryzuje się klasa abstrakcyjna?',
		back: 'Jest oznaczona modyfikatorem abstract, nie można utworzyć obiektu takiej klasy, może ale nie musi zawierać metodę abstrakcyjną.',
	},
	{
		front: 'Co musi zrobić „zwykła” klasa, która dziedziczy po klasie abstrakcyjnej?',
		back: 'Musi dostarczyć implementacji abstrakcyjnych metod abstrakcyjnej klasy bazowej.',
	},
	{
		front: 'Co oznacza słowa final przed deklaracją klasy?',
		back: 'Informuje, że żadna klasa nie może dziedziczyć po tej klasie.',
	},
	{
		front: 'Co się wydarzy jeśli zmienną składową poprzedzimy słowem kluczowym final?',
		back: 'Wartość tej zmiennej nie może zostać zmieniona podczas działania programu.',
	},
	{ front: 'Po jakiej klasie dziedziczą wszystkie inne klasy w Javie?', back: 'Object' },
	{
		front: 'Czy klasa bazowa ma dostęp do składowych klasy pochodnej? A na odwrót?',
		back: 'Nie, klasa bazowa nie dysponuje żadną wiedzą na temat swoich klas pochodnych. Tak, klasa pochodna ma dostęp do wszystkich składowych klasy bazowej – oprócz tych zadeklarowanych jako private.',
	},
	{
		front: 'W jaki sposób możemy uniemożliwić klasie pochodnej dostęp do składowej klasy bazowej?',
		back: 'Deklarując składową klasy bazowej jako private.',
	},
	{
		front: 'Wskaż właściwą kolejność modyfikatorów dostępu od tych najmniej dostępnych do tych najszerzej dostępnych.',
		back: 'private, domyślna (package), protected, public.',
	},
	{
		front: 'Który z pakietów jest automatycznie importowany do każdego programu napisanego w języku Java?',
		back: 'java.lang',
	},
	{ front: 'Z ilu interfejsów maksymalnie może korzystać pojedyncza klasa?', back: 'Z dowolnej liczby.' },
	{
		front: 'Jakiego słowa kluczowego musimy użyć, żebyśmy mogli skorzystać w klasie z interfejsu?',
		back: 'implements',
	},
	{ front: 'Zmienne w interfejsach są domyślnie zadeklarowane jako?', back: 'public, static, final' },
	{
		front: 'Jakiego słowa kluczowego musimy użyć, żebyśmy mogli dziedziczyć w interfejsie po innym interfejsie?',
		back: 'extends',
	},
	{
		front: 'Od JDK8 możemy definiować metody statyczne w interfejsach, jak jej wywołujemy?',
		back: 'Podając nazwę interfejsu, kropkę oraz nazwę metody.',
	},
	{
		front:
			'Od JDK8 możemy definiować metody domyślne w interfejsach, jakim słowem kluczowym musimy poprzedzić ich nazwę?',
		back: 'default',
	},
	{ front: 'Po jakiej klasie dziedziczą wszystkie inne klasy wyjątków w Javie?', back: 'Throwable' },
	{ front: 'Jakie dwie klasy dziedziczą bezpośrednio po klasie Throwable?', back: 'Error i Exception' },
	{
		front:
			'Wyjątki w Javie możemy podzielić na te które musimy obsłużyć i na te których nie musimy. Którego z poniższych wyjątków nie musimy obsługiwać?',
		back: 'StackOverFlowError',
	},
	{ front: 'Czy któryś z poniższych bloków obsługi wyjątków jest obowiązkowy?', back: 'try' },
	{ front: 'Ile bloków catch możemy użyć z jedną instrukcją try?', back: 'Nieskończenie wiele.' },
	{
		front:
			'W jakim bloku umieścimy kod który chcemy żeby się wykonał niezależnie od tego czy wyjątek zostanie wyrzucony czy nie?',
		back: 'finally',
	},
	{
		front:
			'Począwszy od JDK7 jedna klauzula catch może przechwycić wiele wyjątków, aby to zrobić wyposażamy ją w listę wyjątków rozdzielonych za pomocą jakiego operatora?',
		back: 'OR (suma logiczna).',
	},
	{
		front:
			'Gdy chcemy oznaczyć że jakaś metoda może wygenerować wyjątek ale go nie obsługuje powinniśmy dodać do jej deklaracji klauzulę:',
		back: 'throws',
	},
	{
		front: 'Jaka jest różnica pomiędzy throw a throws?',
		back: 'throw używamy w ciele metody by wygenerować wyjątek, a throws w sygnaturze metody by poinformować że może wygenerować wyjątek',
	},
	{
		front: 'Java zapewnia możliwość tworzenia własnych wyjątków, w jaki sposób możemy to zrobić?',
		back: 'Definiując klasę dziedziczącą po klasie Exception',
	},
	{ front: 'Czy kod pisany przez nas powinien obsługiwać wyjątki typu Error?', back: 'Nie' },
	{
		front: 'Jaki wyjątek zostanie wyrzucony jeśli przekroczymy zakres tablicy?',
		back: 'ArrayIndexOutOfBoundsException',
	},
	{
		front:
			'Jaki wyjątek zostanie wyrzucony jeśli spróbujemy przypisać elementowi tablicy wartość lub obiekt niezgodnego typu?',
		back: 'ArrayStoreException',
	},
	{
		front: 'W języku Java są zdefiniowane dwa typy strumienie wejścia-wyjścia ich nazwy to?',
		back: 'bajtowe i znakowe',
	},
	{
		front:
			'Do wersji JDK7 musieliśmy samemu zamknąć zasób żeby uchronić się przed wyciekami, w jaki sposób najlepiej to zrobić?',
		back: 'Poprzez wywołanie metody close() w bloku finally',
	},
	{
		front:
			'Od JDK7 wprowadzona została procedura automatycznego zarządzania zasobami, której właściwe użycie chroni programistę przez wyciekami pamięci bez konieczności wywoływania jawnie metody odpowiadającej za zamknięcie zasobu. W jaki sposób używamy procedury automatycznego zarządzania zasobami?',
		back: 'Modyfikując blok try o nawiasy okrągłe i specyfikacje zasobu do automatycznego zamknięcia.',
	},
	{
		front:
			'Jaką wartość zwraca metoda read() klasy InputStream, gdy zostanie podjęta próba odczytu danych po dotarciu do końca strumienia?',
		back: '-1',
	},
	{ front: 'Jakim typem strumienia jest System.out?', back: 'OutputStream' },
	{
		front: 'Java umożliwia kilka sposobów tworzenia wątków, które dwa z poniższych na to pozwalają?',
		back: 'Implementacja interfejsu Runnable lub utworzenie klasy pochodnej po klasie Thread',
	},
	{
		front:
			'Interfejs Runnable posiada jedną metodę którą musimy zaimplementować i jest ona punktem wejścia wątku, jaka to metoda?',
		back: 'run()',
	},
	{
		front: 'Implementacja jakich dwóch metod z poniższych pozwoli nam ustalić czy wątek zakończył swoje działanie?',
		back: 'isAlive() lub join()',
	},
	{
		front: 'W jaki sposób możemy zapewnić synchronizację dostępu do współdzielonego zasobu?',
		back: 'używając słowa kluczowego synchronised',
	},
	{
		front: 'Czym jest deadlock?',
		back: 'Sytuacją kiedy dwa wątki czekają na siebie nawzajem, więc żaden nie może się zakończyć',
	},
	{ front: 'Metod wait() i notify() używamy do?', back: 'Komunikacji międzywątkowej' },
	{
		front: 'Co zwraca metoda isAlive() ?',
		back: 'Zwraca true, jeśli wątek nadal działa, lub wartość false, gdy wątek zakończył działanie',
	},
	{
		front: 'Jaka jest różnica pomiędzy metodą sleep() a metodą wait() ?',
		back: 'Metoda wait() wstrzymuje działanie na maksymalnie jakiś czas, lub do wywołania metody notify(), a sleep() zatrzymuje działanie wątku na jakiś czas.',
	},
	{ front: 'Po jakiej klasie bezpośrednio i automatycznie dziedziczą typy wyliczeniowe?', back: 'Enum' },
	{ front: 'Aby utworzyć klasę typów wyliczeniowych słowo class musimy zastąpić słowem …. ?', back: 'enum' },
	{
		front: 'Z typami wyliczeniowymi związane jest istotne ograniczenie, jakie?',
		back: 'W przypadku klasy typów wyliczeniowych nie możemy stosować dziedziczenia',
	},
	{
		front:
			'Od JDK5 Java udostępnia automatycznie opakowanie i automatyczne wypakowanie. Dzięki temu możemy stosować typy opakowujące, które pozwalają hermetyzować wartości typów prostych za pomocą obiektów. Do typów opakowujących należą klasy:',
		back: 'Double, Float, Long, Integer, Short, Byte, Character, Boolean',
	},
	{
		front: 'Import wszystkich składowych statycznych np.: z klasy Math możemy uzyskać stosując instrukcję…. ?',
		back: 'import static java.lang.Math. ;',
	},
	{
		front: 'Wybierz prawdziwe zdanie dotyczące adnotacji:',
		back: 'Adnotacje można stosować przy bardzo wielu rodzajach deklaracji, m.in.: metod, klas, zmiennych lokalnych, atrybutów klas, konstruktorów, do oznaczenia typów adnotacji itd.',
	},
	{ front: 'Adnotacja @Override informuje nas, że:', back: 'Metoda musi przesłaniać metodę z klasy bazowej' },
	{
		front: 'Adnotacja @Deprecated informuje nas, że:',
		back: 'Dany element został uznany za przestarzały i jego stosowanie nie jest zalecane.',
	},
	{
		front: 'Typy sparametryzowane są istotnym elementem języka Java, ponieważ pozwalają na tworzenie kodu, który:',
		back: 'Wszystkie odpowiedzi powyżej',
	},
	{ front: 'Który z poniższych przykładów mówi że klasa jest sparametryzowana?', back: 'class Gen<T>' },
	{ front: 'W celu umożliwienia dopasowania typu dowolnego należy użyć znaku, jakiego?', back: '?' },
	{ front: 'Potoczna nazwa typów sparametryzowanych to?', back: 'generics' },
	{
		front: 'Czy można ograniczyć typ argumentu wieloznacznego?',
		back: 'Tak, można określić górne lub dolne ograniczenie',
	},
	{
		front: 'Który z poniższych opisów pasuje do kolekcji ArrayList?',
		back: 'Indeksowana lista o dynamicznie zmieniających się rozmiarach.',
	},
	{
		front: 'Który z poniższych opisów pasuje do kolekcji LinkedList?',
		back: 'Uporządkowana lista pozwalająca na szybkie wstawianie i usuwanie elementów w dowolnej lokalizacji.',
	},
	{
		front: 'Który z poniższych opisów pasuje do kolekcji HashMap?',
		back: 'Struktura danych przechowująca pary klucz – wartość.',
	},
	{ front: 'Który z poniższych opisów pasuje do kolekcji TreeSet?', back: 'Uporządkowany zbiór.' },
	{
		front:
			'Od JDK8 do Javy wprowadzono wyrażenia lambda, żeby z nich skorzystać musimy użyć operatora lambda, czyli jakiego?',
		back: '->',
	},
	{ front: 'Skrót SAM (single abstract method) odnosi się do:', back: 'Interfejsu funkcyjnego' },
	{
		front:
			'W jakim pakiecie znajdziemy interfejsy funkcyjne zdefiniowane w kontekście używania ich w lambda wyrażeniach?',
		back: 'java.util.function',
	},
	{
		front:
			'Wprowadzenie wyrażeń lambda było wstępem do programowania funkcyjnego w Javie, jego rozwinięciem było wprowadzenia strumieni ( stream() ), które należy rozumieć jako:',
		back: 'Strumienie odpowiedzialne za przetwarzanie danych bez ich modyfikowania',
	},
	{
		front: 'Z JDK8 do Javy zostały wprowadzone wyrażenia Lambda, żeby ich używać wykorzystujemy który operator?',
		back: '->',
	},
	{ front: 'SAM (single abstract method) odnosi się do:', back: 'interfejsu funkcyjnego' },
	{
		front: 'W którym pakiecie może odnaleźć interfejsy funkcyjne zdefiniowane na potrzeby wyrażeń lambda?',
		back: 'java.util.function',
	},
	{
		front:
			'Wprowadzenie wyrażeń lambda było jednocześnie wprowadzenie programowania funkcyjnego do Java, jego rozwinięciem było wprowadzenie strumieni (stream()), które powinno być rozumiane jako:',
		back: 'strumienie odpowiedzialne za procesowanie danych bez ich modyfikowania',
	},
	{
		front: 'Wyrażenia lambda możemy podzielić na kilka kategorii, te opisywane jako Funkcyjne mogę być opisane jako:',
		back: 'akceptujące jeden parametr, zwracają wynik dowolnego typu',
	},
	{
		front: 'Wyrażenia lambda możemy podzielić na kilka kategorii, te opisywane jako Predykcyjne mogę być opisane jako:',
		back: 'akceptujące jeden parametr, zwracają wynik typu boolean',
	},
	{
		front:
			'Wyrażenia lambda możemy podzielić na kilka kategorii, te opisywane jako Operacje Binarne mogę być opisane jako:',
		back: 'akceptujące dwa parametry tego samego typu, zwracają wynik tego samego typu',
	},
	{
		front: 'Wyrażenia lambda możemy podzielić na kilka kategorii, te opisywane jako Konsument mogę być opisane jako:',
		back: 'akceptujące jeden parametr, nie zwracają nic',
	},
	{ front: 'Domyślny port na którym uruchamia się Spring Boot to:', back: '8080' },
	{ front: 'Klasa w Springu udostępniająca interfejs REST powinna mieć adnotację:', back: '@RestController' },
	{
		front: 'Najlepszą praktyką wstrzykiwania w zależności w ramach frameworka Spring jest wstrzykiwanie przez:',
		back: 'konstruktor',
	},
	{ front: 'Czym jest „Bean” w Springu?', back: 'obiektem zarządzanym przez kontekst Springa' },
	{ front: 'Domyślny format danych zwracanych przez WWW w ramach Spring to:', back: 'JSON' },
	{ front: 'Metoda HTTP odpowiedzialna za służąca do aktualizowania stanu zasobu to:', back: 'PUT' },
	{ front: 'Metoda HTTP odpowiedzialna za tworzenie zasobu to:', back: 'POST' },
	{ front: 'Jaki jest domyślny plik wynikowy aplikacji napisane w Spring Boot?', back: 'jar' },
	{ front: 'Hibernate to:', back: 'framework odpowiedzialny za wdrażanie warstwy dostępu do danych' },
	{
		front: 'Jak działa stategia generowania kluszy GenerationType.SEQUENCE ?',
		back: 'inkrementuje id zgodnie ze wskazaną sekwencją',
	},
	{ front: 'Która z poniższych adnotacji jest zgodna z AOP (Aspect Oriented Programmin):', back: '@Before' },
	{
		front: 'Które z poniższych narzędzi jest używane do zarządzania zależnościami w ramach Spring Boot?',
		back: 'Maven',
	},
	{ front: 'Co oznacza skrót MVC?', back: 'Model View Controller' },
	{ front: 'Która z poniższych metod HTTP nie jest idempotentna?', back: 'POST' },
	{
		front: 'Która z poniższych adnotacji umożliwia automatyczną konfigurację Spring Boot?',
		back: '@EnableAutoConfiguration',
	},
	{
		front:
			'Której z poniższych adnotacji można użyć do wstrzyknięcia wartości właściwości w Spring Beans oraz do klas konfiguracyjnych?',
		back: '@Value',
	},
]

let currentCardIndex = 0

function shuffleFlashcards() {
	for (let i = flashcards.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1))
		;[flashcards[i], flashcards[j]] = [flashcards[j], flashcards[i]]
	}
}

function renderCard() {
	const flashcard = document.getElementById('flashcard')
	const front = flashcard.querySelector('.container__flashcard--front')
	const back = flashcard.querySelector('.container__flashcard--back')
	const counter = document.getElementById('counter')

	if (flashcards.length === 0) {
		flashcard.style.display = 'none'
		counter.textContent = 'Congratulations, you know everything!'
		return
	}

	flashcard.style.display = 'block'
	front.textContent = flashcards[currentCardIndex].front
	back.textContent = flashcards[currentCardIndex].back
	counter.textContent = `Card ${currentCardIndex + 1} of ${flashcards.length}`

	// Reset flip state
	flashcard.classList.remove('clicked')
}

function nextCard() {
	currentCardIndex = (currentCardIndex + 1) % flashcards.length
	renderCard()
}

function previousCard() {
	currentCardIndex = (currentCardIndex - 1 + flashcards.length) % flashcards.length
	renderCard()
}

function removeCard() {
	if (flashcards.length > 0) {
		flashcards.splice(currentCardIndex, 1)
		if (currentCardIndex >= flashcards.length) {
			currentCardIndex = 0
		}
		renderCard()
	}
}

document.getElementById('flashcard').addEventListener('click', function () {
	this.classList.toggle('clicked')
})

shuffleFlashcards()
renderCard()
