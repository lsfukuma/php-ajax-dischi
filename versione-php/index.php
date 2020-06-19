<?php include '../public/database/dischi.php';
 ?>
<!DOCTYPE html>
<html lang="en" dir="ltr">
    <head>
        <meta charset="utf-8">
        <title>Versione php dischi</title>
        <link rel="stylesheet" href="../public/app.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    </head>
    <body>
        <header>
            <img src="../public/img/spotify.svg" alt="">
        </header>
        <main>
            <div class="discs">
                <?php foreach ($dischi as $disc) { ?>
                    <div class="single-disc">
                        <img src="
                        <?php echo $disc['poster']; ?>
                        " alt=" <?php echo $disc['title']; ?>">
                        <h1> <?php echo $disc['title']; ?> </h1>
                        <p> <?php echo $disc['author']; ?> </p>
                        <p> <?php echo $disc['genre'] ?></p>
                        <p> <?php echo $disc['year'] ?></p>
                    </div>
                <?php
                } ?>

            </div>
        </main>
        <script src="../versione-ajax/main.js" charset="utf-8"></script>
    </body>
</html>
