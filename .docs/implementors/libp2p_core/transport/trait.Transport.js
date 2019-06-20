(function() {var implementors = {};
implementors["libp2p_core"] = [];
implementors["libp2p_dns"] = [{text:"impl&lt;T&gt; <a class=\"trait\" href=\"libp2p_core/transport/trait.Transport.html\" title=\"trait libp2p_core::transport::Transport\">Transport</a> for <a class=\"struct\" href=\"libp2p_dns/struct.DnsConfig.html\" title=\"struct libp2p_dns::DnsConfig\">DnsConfig</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"libp2p_core/transport/trait.Transport.html\" title=\"trait libp2p_core::transport::Transport\">Transport</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;T::<a class=\"type\" href=\"libp2p_core/transport/trait.Transport.html#associatedtype.Error\" title=\"type libp2p_core::transport::Transport::Error\">Error</a>: 'static,&nbsp;</span>",synthetic:false,types:["libp2p_dns::DnsConfig"]},];
implementors["libp2p_identify"] = [{text:"impl&lt;TTrans, TMuxer&gt; <a class=\"trait\" href=\"libp2p_core/transport/trait.Transport.html\" title=\"trait libp2p_core::transport::Transport\">Transport</a> for <a class=\"struct\" href=\"libp2p_identify/struct.IdentifyTransport.html\" title=\"struct libp2p_identify::IdentifyTransport\">IdentifyTransport</a>&lt;TTrans&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;TTrans: <a class=\"trait\" href=\"libp2p_core/transport/trait.Transport.html\" title=\"trait libp2p_core::transport::Transport\">Transport</a>&lt;Output = TMuxer&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;TTrans::<a class=\"type\" href=\"libp2p_core/transport/trait.Transport.html#associatedtype.Error\" title=\"type libp2p_core::transport::Transport::Error\">Error</a>: 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;TMuxer: <a class=\"trait\" href=\"libp2p_core/muxing/trait.StreamMuxer.html\" title=\"trait libp2p_core::muxing::StreamMuxer\">StreamMuxer</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;TMuxer::<a class=\"type\" href=\"libp2p_core/muxing/trait.StreamMuxer.html#associatedtype.Substream\" title=\"type libp2p_core::muxing::StreamMuxer::Substream\">Substream</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + 'static,&nbsp;</span>",synthetic:false,types:["libp2p_identify::id_transport::IdentifyTransport"]},];
implementors["libp2p_ratelimit"] = [{text:"impl&lt;T&gt; <a class=\"trait\" href=\"libp2p_core/transport/trait.Transport.html\" title=\"trait libp2p_core::transport::Transport\">Transport</a> for <a class=\"struct\" href=\"libp2p_ratelimit/struct.RateLimited.html\" title=\"struct libp2p_ratelimit::RateLimited\">RateLimited</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"libp2p_core/transport/trait.Transport.html\" title=\"trait libp2p_core::transport::Transport\">Transport</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;T::<a class=\"type\" href=\"libp2p_core/transport/trait.Transport.html#associatedtype.Output\" title=\"type libp2p_core::transport::Transport::Output\">Output</a>: <a class=\"trait\" href=\"tokio_io/async_read/trait.AsyncRead.html\" title=\"trait tokio_io::async_read::AsyncRead\">AsyncRead</a> + <a class=\"trait\" href=\"tokio_io/async_write/trait.AsyncWrite.html\" title=\"trait tokio_io::async_write::AsyncWrite\">AsyncWrite</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;T::<a class=\"type\" href=\"libp2p_core/transport/trait.Transport.html#associatedtype.Error\" title=\"type libp2p_core::transport::Transport::Error\">Error</a>: 'static,&nbsp;</span>",synthetic:false,types:["libp2p_ratelimit::RateLimited"]},];
implementors["libp2p_tcp"] = [{text:"impl <a class=\"trait\" href=\"libp2p_core/transport/trait.Transport.html\" title=\"trait libp2p_core::transport::Transport\">Transport</a> for <a class=\"struct\" href=\"libp2p_tcp/struct.TcpConfig.html\" title=\"struct libp2p_tcp::TcpConfig\">TcpConfig</a>",synthetic:false,types:["libp2p_tcp::TcpConfig"]},];
implementors["libp2p_uds"] = [{text:"impl <a class=\"trait\" href=\"libp2p_core/transport/trait.Transport.html\" title=\"trait libp2p_core::transport::Transport\">Transport</a> for <a class=\"struct\" href=\"libp2p_uds/struct.UdsConfig.html\" title=\"struct libp2p_uds::UdsConfig\">UdsConfig</a>",synthetic:false,types:["libp2p_uds::UdsConfig"]},];
implementors["libp2p_wasm_ext"] = [{text:"impl <a class=\"trait\" href=\"libp2p_core/transport/trait.Transport.html\" title=\"trait libp2p_core::transport::Transport\">Transport</a> for <a class=\"struct\" href=\"libp2p_wasm_ext/struct.ExtTransport.html\" title=\"struct libp2p_wasm_ext::ExtTransport\">ExtTransport</a>",synthetic:false,types:["libp2p_wasm_ext::ExtTransport"]},];
implementors["libp2p_websocket"] = [{text:"impl&lt;T&gt; <a class=\"trait\" href=\"libp2p_core/transport/trait.Transport.html\" title=\"trait libp2p_core::transport::Transport\">Transport</a> for <a class=\"struct\" href=\"libp2p_websocket/framed/struct.WsConfig.html\" title=\"struct libp2p_websocket::framed::WsConfig\">WsConfig</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"libp2p_core/transport/trait.Transport.html\" title=\"trait libp2p_core::transport::Transport\">Transport</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;T::<a class=\"type\" href=\"libp2p_core/transport/trait.Transport.html#associatedtype.Error\" title=\"type libp2p_core::transport::Transport::Error\">Error</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;T::<a class=\"type\" href=\"libp2p_core/transport/trait.Transport.html#associatedtype.Dial\" title=\"type libp2p_core::transport::Transport::Dial\">Dial</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;T::<a class=\"type\" href=\"libp2p_core/transport/trait.Transport.html#associatedtype.Listener\" title=\"type libp2p_core::transport::Transport::Listener\">Listener</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;T::<a class=\"type\" href=\"libp2p_core/transport/trait.Transport.html#associatedtype.ListenerUpgrade\" title=\"type libp2p_core::transport::Transport::ListenerUpgrade\">ListenerUpgrade</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;T::<a class=\"type\" href=\"libp2p_core/transport/trait.Transport.html#associatedtype.Output\" title=\"type libp2p_core::transport::Transport::Output\">Output</a>: <a class=\"trait\" href=\"tokio_io/async_read/trait.AsyncRead.html\" title=\"trait tokio_io::async_read::AsyncRead\">AsyncRead</a> + <a class=\"trait\" href=\"tokio_io/async_write/trait.AsyncWrite.html\" title=\"trait tokio_io::async_write::AsyncWrite\">AsyncWrite</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'static,&nbsp;</span>",synthetic:false,types:["libp2p_websocket::framed::WsConfig"]},{text:"impl&lt;T&gt; <a class=\"trait\" href=\"libp2p_core/transport/trait.Transport.html\" title=\"trait libp2p_core::transport::Transport\">Transport</a> for <a class=\"struct\" href=\"libp2p_websocket/struct.WsConfig.html\" title=\"struct libp2p_websocket::WsConfig\">WsConfig</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"libp2p_core/transport/trait.Transport.html\" title=\"trait libp2p_core::transport::Transport\">Transport</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;T::<a class=\"type\" href=\"libp2p_core/transport/trait.Transport.html#associatedtype.Error\" title=\"type libp2p_core::transport::Transport::Error\">Error</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;T::<a class=\"type\" href=\"libp2p_core/transport/trait.Transport.html#associatedtype.Dial\" title=\"type libp2p_core::transport::Transport::Dial\">Dial</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;T::<a class=\"type\" href=\"libp2p_core/transport/trait.Transport.html#associatedtype.Listener\" title=\"type libp2p_core::transport::Transport::Listener\">Listener</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;T::<a class=\"type\" href=\"libp2p_core/transport/trait.Transport.html#associatedtype.ListenerUpgrade\" title=\"type libp2p_core::transport::Transport::ListenerUpgrade\">ListenerUpgrade</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;T::<a class=\"type\" href=\"libp2p_core/transport/trait.Transport.html#associatedtype.Output\" title=\"type libp2p_core::transport::Transport::Output\">Output</a>: <a class=\"trait\" href=\"tokio_io/async_read/trait.AsyncRead.html\" title=\"trait tokio_io::async_read::AsyncRead\">AsyncRead</a> + <a class=\"trait\" href=\"tokio_io/async_write/trait.AsyncWrite.html\" title=\"trait tokio_io::async_write::AsyncWrite\">AsyncWrite</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'static,&nbsp;</span>",synthetic:false,types:["libp2p_websocket::WsConfig"]},];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()