<?php

class indexController extends Controller
{
    private $_index;
    
    public function __construct() {
        parent::__construct();
        
        //$this->_index = $this->loadModel('index');
    }
    
    public function index()
    {
        $this->_view->setJs(array('index'));
        
        if($this->getInt('generar') == 1){
            $speed = $this->getTexto('speed');
            $speed = explode(".", $speed);
            $tempo = $speed[0];
            $this->_view->speed = $tempo;
            
            
            while(true){
                $json = file_get_contents('http://developer.echonest.com/api/v4/song/search?api_key=MZFEPELDSKFX4WAMA&min_tempo='. $tempo .'&max_tempo='. ($tempo+10) .'&results=100&bucket=id:spotify');
                $obj = json_decode($json, true);
                
    
                $obj = $obj['response']['songs'][rand(0,99)];
                //var_dump($obj);
                $artista = $obj['artist_name'];
                $artista = str_replace(" ", "%20", $artista);
                
                $tema = $obj['title'];
                $tema = str_replace(" ", "%20", $tema);
                
                $url2 = file_get_contents('http://developer.echonest.com/api/v4/song/search?api_key=MZFEPELDSKFX4WAMA&format=json&results=1&artist='. $artista .'&title='. $tema .'&bucket=id:spotify&bucket=tracks&limit=true');
                $obj = json_decode($url2, true);
                
                if(count( $obj['response']['songs']) > 0){
                    $obj2 = $obj['response']['songs'][0]['tracks'][0]['foreign_id'];
                    $obj2 = explode(":", $obj2);
                    $obj2 = $obj2[2];
                    $obj1 = $obj['response']['songs'][0]['artist_foreign_ids'][0]['foreign_id'];
                    $obj1 = explode(":", $obj1);
                    $obj1 = $obj1[2];
                    
                    break;
                }
            }
            
            $json = file_get_contents("https://api.spotify.com/v1/tracks/". $obj2);
            $obj = json_decode($json, true);
            
            $this->_view->albumName = $obj['album']['name'];
            $this->_view->artist = $obj['artists'][0]['name'];
            $this->_view->song = $obj['name'];
            
            $url_mp3 = $obj['preview_url'];
            
            $json = file_get_contents('https://api.spotify.com/v1/artists/'. $obj1);
            $obj = json_decode($json, true);
            $obj = $obj['images'][0]['url'];
            
            $this->_view->imgGrupo = $obj;
            
            $this->_view->renderizar('reproductor');
            echo "<script> loadSound('". $url_mp3 ."');</script>";exit;
        }
        $this->_view->renderizar('index');
    }
}

?>