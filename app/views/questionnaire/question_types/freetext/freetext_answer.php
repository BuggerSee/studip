<?php
    $etask = $vote->etask;

    $answer = $vote->getMyAnswer();
    $answerdata = $answer['answerdata'] ? $answer['answerdata']->getArrayCopy() : [];
?>

<label>
    <div>
        <?= Icon::create('guestbook', Icon::ROLE_INFO)->asImg(20, ['class' => 'text-bottom']) ?>
        <?= formatReady($etask->description) ?>
    </div>
    <textarea name="answers[<?= $vote->getId() ?>][answerdata][text]" style="width: 100%; border: 1px solid #c5c7ca;"><?= htmlReady($answerdata['text']) ?></textarea>
</label>
