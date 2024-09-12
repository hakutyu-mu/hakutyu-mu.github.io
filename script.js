const questions = [
    { word: "見る", correct: "思う、関係を結ぶ、面倒を見る", explanation: "思いや感情を込めて見るという意味から来ているそう" },
    { word: "見す", correct: "結婚させる" , explanation: "「見せる」から派生して、「他者に結びつける」「他者を紹介する」という意味で使われたそう" },
    { word: "見ゆ", correct: "見える・思われる、見せる、結婚する" , explanation: "「見ゆる」って思うと受動態っぽくて覚えやすい" },
    { word: "かいまみる", correct: "のぞき見る" , explanation: "垣間見る、「垣の隙間から覗く」から来てるそう" },
    { word: "よばふ", correct: "呼び続ける、求婚する", explanation: "呼び続けることで求婚するってことから来てるそう"  },
    { word: "好く", correct: "風流を好む", explanation: "これはまんま"  },
    { word: "わたる", correct: "通る、いらっしゃる、〜続ける、一面に" , explanation: "「1週間にわたる」って現在でも言うし" },
    { word: "ありく", correct: "出歩く、〜しまわる、〜続ける" , explanation: "「歩く」、歩き回る→歩き「続ける」" },
    { word: "おこなふ", correct: "仏道修行をする" , explanation: "仏道修「行」" },
    { word: "なやむ", correct: "病気になる" , explanation: "「病気に悩む」って覚えた" },
    { word: "おこたる", correct: "病気が治る" , explanation: "病気の進行が「怠る」→病気が治る" },
    { word: "おくる", correct: "先立たれる" , explanation: "亡くなった人を見「送る」" },
    { word: "ながむ", correct: "もの思いに沈む、口ずさむ" , explanation: "外を「眺め」てエモく感じるって覚えた" },
    { word: "ときめく", correct: "寵愛を受ける、栄える" , explanation: "「時にめぐまれる」から来ているそう、時代に恵まれて権力者に好かれるとか" },
    { word: "かしづく", correct: "大切に育てる、大切に世話をする" , explanation: "「傍（かたえ）付き」から来ているそう、傍に付いているから面倒を見る" },
    { word: "めづ", correct: "愛する、感嘆する" , explanation: "「愛づ」" },
    { word: "おどろく", correct: "目を覚ます、気づく" , explanation: "「驚いて目が覚めたことに気づく」で覚えた、文おかしいけど" },
    { word: "こうず", correct: "疲れる" , explanation: "「困ず」、困る→疲れる" },
    { word: "おぼゆ", correct: "思われる、思い出される、似る" , explanation :"「ゆ」が付いたらだいたい受け身" },
    { word: "聞こゆ", correct: "聞こえる、評判になる、分かる" , explanation: "自然に聞こえることを言う、「自然に聞こゆる」で覚えた" },
    { word: "まもる・まぼる", correct: "見つめる" , explanation: "じっと見「守る」→見つめる" },
    { word: "たのむ", correct: "あてにする、あてにさせる" , explanation: "頼む→信頼→あてにする" },
    { word: "かづく", correct: "かぶる、いただく、与える" , explanation: "漢字だと「被く」なので「被る（かぶる）」だと分かりやすい" },
    { word: "ののしる", correct: "大声で騒ぐ、評判になる、羽振りをきかす" , explanation: "大声で騒ぐから周囲に聞こえて評判になる" },
    { word: "やる", correct: "送る、〜きれない" , explanation: "「遣る(やる)」から来てるらしい、「遣唐使はやりきれない」で覚えた" },
    { word: "いらふ", correct: "答える" , explanation: "雰囲気で覚えた" },
    { word: "にほふ", correct: "美しく映える" , explanation: "匂う→いい匂い→美しい" },
    { word: "あきらむ", correct: "明らかにする" , explanation: "そのまんま" },
    { word: "ねんず", correct: "がまんする" , explanation: "「念ず」" },
    { word: "まうく", correct: "用意する" , explanation: "「設く」から来てる" },
    { word: "ゐる", correct: "座る、〜ている、連れる" , explanation: "「居る」" },
    { word: "具す", correct: "伴う・連れる・添える" , explanation: "倶に（ともに）に似てるなーで覚えた" },
    { word: "経", correct: "たつ、通る" , explanation: "「経つ」" },
    { word: "さる", correct: "避ける、なる" , explanation: "去る→避ける" },
    { word: "ものす", correct: "する、いらっしゃる" , explanation:"「何かする」とか「いる」とかって意味でめっちゃ汎用性高いらしい" },
    { word: "ならふ", "correct": "慣れる、なじむ" , explanation: "習う→習慣→慣れる" },
    { word: "しのぶ", correct: "がまんする、人目につかないようにする、思い出す" , explanation: "「忍ぶ」、隠れている（忍んでいる）ことを思い出すで覚えた" },
    { word: "わぶ", correct: "困る・嘆く、〜かねる" , explanation: "漢字だと「侘ぶ」、「詫びる」と似てるから、謝るほど困るって覚えた" }
];

let currentQuestionIndex = 0;
let score = 0;
let timerInterval;  // タイマーを制御するための変数をグローバルに定義
const maxQuestions = 30;

const questionElement = document.getElementById('question');
const options = Array.from(document.getElementsByClassName('option'));
const scoreElement = document.getElementById('score');
const timerElement = document.getElementById('timer');
const questionCounterElement = document.getElementById('question-counter');  // 問題番号表示用の要素

// ページ読み込み時に初期化
document.addEventListener("DOMContentLoaded", () => {
    const startGameBtn = document.getElementById('start-button');
    const titleScreen = document.getElementById('title-screen');
    const gameScreen = document.getElementById('game-screen');

    // スタートボタンがクリックされたときにゲームを開始
    startGameBtn.addEventListener('click', () => {
        titleScreen.style.display = 'none';  // タイトル画面を非表示
        gameScreen.style.display = 'block';  // ゲーム画面を表示
        startGame();  // ゲームを開始
    });

    // 終了ボタンにリスナーを追加
    document.getElementById('end-game-btn').addEventListener('click', () => {
        Swal.fire({
            title: 'ゲームを終了しますか？',
            text: "現在までの結果をリザルト画面に表示します。",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: '終了する',
            cancelButtonText: 'キャンセル'
        }).then((result) => {
            if (result.isConfirmed) {
                endGame();  // ゲーム終了処理を呼び出す
            }
        });
    });

    // ゲーム画面を初期状態で非表示に設定
    gameScreen.style.display = 'none';
});

let shuffledQuestions;  // シャッフルされた質問リスト
let results = [];  // 問題ごとの結果を保存するリスト

// ゲームを開始する関数
function startGame() {
    score = 0;
    currentQuestionIndex = 0;
    shuffledQuestions = shuffleArray(questions).slice(0, maxQuestions);  // 質問をシャッフル
    scoreElement.textContent = `スコア: ${score}`;
    loadQuestion();  // 最初の問題をロード
}

// ゲーム終了時にタイマーを停止する関数
function endGame() {
    clearInterval(timerInterval);  // タイマーを停止

    // 結果表示用のHTMLを作成
    let resultHtml = '<h2>結果一覧</h2>';
    results.forEach(result => {
        resultHtml += `
        <div class="result-card">
            <h3>単語: ${result.word}</h3>
            <p><strong>正しい選択肢:</strong> ${result.correctAnswer}</p>
            <p><strong>あなたの選択肢:</strong> ${result.selectedAnswer}</p>
            <p><strong>自分用メモ:</strong> ${result.explanation}</p>
            <p><strong>結果:</strong> ${result.isCorrect ? '⭕️' : '✖️'}</p>
        </div>`;
    });

    Swal.fire({
        title: 'ゲーム終了！',
        html: resultHtml,  // カード形式の結果を表示
        confirmButtonText: 'もう一度プレイ',
        showCancelButton: true,
        cancelButtonText: '終了'
    }).then((result) => {
        if (result.isConfirmed) {
            resetGame();  // ゲームをリセットして再スタート
        } else {
            // タイトル画面に戻す処理
            document.getElementById('game-screen').style.display = 'none';  // ゲーム画面を非表示
            document.getElementById('title-screen').style.display = 'block';  // タイトル画面を表示
            Swal.fire('ナイスファイト！');
        }
    });
}

function loadQuestion() {
    clearInterval(timerInterval);  // 前のタイマーをクリア
    const timeLimit = 15;  // タイマーの時間を15秒に設定
    timerElement.textContent = `残り時間: ${timeLimit}秒`;  // タイマーの表示を更新
    startTimer(timeLimit, timerElement);  // タイマーをスタート

    const currentQuestion = shuffledQuestions[currentQuestionIndex];  // シャッフルされた質問から取得
    const correctAnswer = currentQuestion.correct;

    let incorrectAnswers = questions
        .filter((question) => question.correct !== correctAnswer)  // 現在の問題の正解を除外
        .map((question) => question.correct);  // 他の問題の正解を取得

    incorrectAnswers = shuffleArray(incorrectAnswers).slice(0, 3);  // ランダムに3つの不正解の選択肢を取得

    const optionsList = shuffleArray([correctAnswer, ...incorrectAnswers]);  // 正解と不正解を混ぜてシャッフル

    questionElement.textContent = `Q: ${currentQuestion.word} の意味は？`;

    optionsList.forEach((option, index) => {
        document.getElementById(`option${index + 1}`).textContent = option;
        document.getElementById(`option${index + 1}`).onclick = () => checkAnswer(option);
    });

    // 現在の問題番号を表示
    questionCounterElement.textContent = `問題 ${currentQuestionIndex + 1} / ${maxQuestions}`;
}

function checkAnswer(selectedAnswer) {
    const currentQuestion = shuffledQuestions[currentQuestionIndex];
    clearInterval(timerInterval);  // タイマーを停止

    const correctSound = document.getElementById('correct-sound');
    const incorrectSound = document.getElementById('incorrect-sound');

    // 結果を保存
    const result = {
        word: currentQuestion.word,
        correctAnswer: currentQuestion.correct,
        selectedAnswer: selectedAnswer,
        explanation: currentQuestion.explanation,
        isCorrect: selectedAnswer === currentQuestion.correct
    };
    results.push(result);

    if (result.isCorrect) {
        score++;
        scoreElement.textContent = `スコア: ${score}`;

        correctSound.play();  // 正解音を再生

        Swal.fire({
            icon: 'success',
            title: '正解！',
            html: `
                <p>あなたの選択肢: ${selectedAnswer}</p>
                <p>正しい選択肢: ${currentQuestion.correct}</p>
                <p><strong>自分用メモ:</strong> ${currentQuestion.explanation}</p>
            `,
            confirmButtonText: '次の問題へ'
        }).then(() => {
            nextQuestion();
        });
    } else {
        incorrectSound.play();  // 不正解音を再生

        Swal.fire({
            icon: 'error',
            title: '不正解...',
            html: `
                <p>あなたの選択肢: ${selectedAnswer}</p>
                <p>正しい選択肢: ${currentQuestion.correct}</p>
                <p><strong>自分用メモ:</strong> ${currentQuestion.explanation}</p>
            `,
            confirmButtonText: '次の問題へ'
        }).then(() => {
            nextQuestion();
        });
    }
}

function nextQuestion() {
    clearInterval(timerInterval);  // 前のタイマーをクリア
    currentQuestionIndex++;
    if (currentQuestionIndex < shuffledQuestions.length) {
        loadQuestion();  // 次の問題を読み込む
    } else {
        endGame();  // 全ての問題が終了したら結果を表示
    }
}

function startTimer(duration, display) {
    let timer = duration;
    display.textContent = `残り時間: ${timer}秒`;

    timerInterval = setInterval(function () {
        timer--;
        display.textContent = `残り時間: ${timer}秒`;

        if (timer <= 0) {
            clearInterval(timerInterval);  // タイマーを停止
            Swal.fire({
                icon: 'error',
                title: '時間切れ！',
                text: '次の問題へ進みます。',
                confirmButtonText: 'OK'
            }).then(() => {
                nextQuestion();  // 時間切れの場合は次の問題へ
            });
        }
    }, 1000);
}

function resetGame() {
    score = 0;
    currentQuestionIndex = 0;
    scoreElement.textContent = `スコア: ${score}`;
    startGame();  // ゲームをリセットして再スタート
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
